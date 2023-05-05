from crtsh import crtshAPI ## search certificate /
import json
import time
import csv
from waybackpy import WaybackMachineCDXServerAPI ## search historical copies of website
import socket
import dns.resolver
import whois # query and response protocol that is often used for querying databases that store registered domain names.
import datetime
import pandas as pd
import os



def download_page(url):

    #TODO: Integrate shot-scraper CLI calls
#     print("current download_page url:",url)
    !shot-scraper {url}
#     print("download page completed")

    return 0

# Returns URL of latest archive page, timestamp of latest archive page
def download_archived_page(url):

    try:
        user_agent = "Mozilla/5.0 (Windows NT 5.1; rv:40.0) Gecko/20100101 Firefox/40.0"
        cdx_api = WaybackMachineCDXServerAPI(url, user_agent)

        newest = cdx_api.newest()

        return [newest.archive_url, newest.timestamp]

    except:
        print("download_archieved_page exception triggered")

        return ['', '']

# Returns Subject CN, SAN, Issuer Details, Issued Date, Earliest Issue Date of the first cert, Number of Certs
def download_cert(domain_name):

    if not os.path.exists("downloaded_certs"):
            os.makedirs("downloaded_certs")
        
    try:
        cert_json = crtshAPI().search(domain_name)
#         print(cert_json)
        
#         print(cert_json[len(cert_json)-1])
        
        
        with open("downloaded_certs/" + domain_name + ".json", "w") as outfile:
            json.dump(cert_json, outfile)

        return [cert_json[0]['common_name'], cert_json[0]['name_value'], cert_json[0]['issuer_name'], cert_json[0]['not_before'], len(cert_json)]

    except:

        print("download_cert exception triggered")
        return ['', '', '', '', '', '']



# Returns Unique CNs, Set of CNs, Unique Issuers, Set of Issuers, Unique AltName Values, Min of AltName Count, Max of AltName Count
def process_downloaded_cert(domain_name):

    try:
        # Opening JSON file
        f = open("downloaded_certs/" + domain_name + ".json")
        data = json.load(f)

        SubjectCN_set = set()
        Issuer_set = set()
        SerialNo_set = set()
        AltName_set = set()
        AltName_count_min = 99999
        AltName_count_max = 0

        if (len(data) == 0):
            return ['', '', '', '', '', '', '']


        for i in data:
            #print(i)

            SubjectCN_set.add(i["common_name"])
            Issuer_set.add(i["issuer_name"])
            SerialNo_set.add(i["serial_number"])
            AltName_set.add(i["name_value"])


            NumOfAltNamesInside = (i["name_value"].count("\n"))+1
            if (NumOfAltNamesInside < AltName_count_min):
                AltName_count_min = NumOfAltNamesInside

            if (NumOfAltNamesInside > AltName_count_max):
                AltName_count_max = NumOfAltNamesInside

        # Closing file
        f.close()

        return [len(SubjectCN_set), SubjectCN_set, len(Issuer_set), Issuer_set, len(AltName_set), AltName_count_min, AltName_count_max]

    except:
        print("process_downloaded_cert exception triggered")
        return ['', '', '', '', '', '', '']

# Returns CNAME, A IPs, Nameservers
def get_dns_info(domain_name):

    try:
        dns_info = socket.gethostbyname_ex(domain_name)
        print(dns_info)
        nameservers = dns.resolver.query(domain_name, 'NS')
        nameserver_list = [i.to_text() for i in nameservers]

        return [dns_info[1], dns_info[2], nameserver_list]

    except:

        print("get_dns_info exception triggered")
        return [[], [], []]


# Returns Registra, Name, Org, Created Date, Updated Date
def get_domain_whois_info(domain_name):

    if not os.path.exists("downloaded_whois"):
            os.makedirs("downloaded_whois")
            
    try:
        w = whois.whois(domain_name)
        with open("downloaded_whois/" + domain_name + ".txt", "w") as outfile:
            outfile.write(str(w.text))

        return [w.registrar, w.name, w.org, w.creation_date, w.updated_date]

    except:

        print("get_domain_whois_info() exception triggered")
        return ['', '', '', '', '']



with open('to_process.csv', newline='') as inputfile:
    with open('output_certVariations.csv', 'w', newline='') as outputfile:
        domain_list = csv.reader(inputfile, delimiter=',')
        output_writer = csv.writer(outputfile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

        counter = 0

        for row in domain_list:
            print("Processing: #" + str(counter) + " - " + row[0])
#             print("Printing Row: ", row)

            cert_list = download_cert(row[0])
            archivedpage_list = download_archived_page(row[0])
            dns_list = get_dns_info(row[0])
            whois_list = get_domain_whois_info(row[0])
            image = download_page(row[0])

            cert_variations = process_downloaded_cert(row[0])

#             output_writer.writerow(row + [datetime.datetime.now()] + cert_list + archivedpage_list + dns_list + whois_list)

            output_writer.writerow(row + [datetime.datetime.now()] + cert_variations)

            outputfile.flush()

            counter += 1
            #time.sleep(4)



print("completed")
exit(0)


