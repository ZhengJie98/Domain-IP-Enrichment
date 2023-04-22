window.NDM = {
    "WIFI": {
        "BGN": {
            "MASTER": "WifiMaster0",
            "STA": "WifiMaster0/WifiStation0",
            "AP": [
                "WifiMaster0/AccessPoint0",
                "WifiMaster0/AccessPoint1",
                "WifiMaster0/AccessPoint2",
                "WifiMaster0/AccessPoint3"
            ],
            "GuestAPName": "GuestWiFi"
        },
        "AC": {
            "MASTER": "WifiMaster1",
            "STA": "WifiMaster1/WifiStation0",
            "AP": [
                "WifiMaster1/AccessPoint0",
                "WifiMaster1/AccessPoint1",
                "WifiMaster1/AccessPoint2",
                "WifiMaster1/AccessPoint3"
            ]
        }
    },
    "MAX_FW_SIZE": 29097984,
    "DSL": "Dsl0",
    "VDSL": "Switch0",
    "INTERNAL_LTE_ID": "",
    "INTERNAL_LTE_DESCRIPTION": "",
    "DSL_ALWAYS_PRESENT": false,
    "FW_FLASHING_SPEED": 2500000,
    "FW_BOOT_TIME": 90000,
    "FW_SHUTDOWN_TIME": 7000,
    "LAN": "Home",
    "CHILLI_IFACE": "Chilli0",
    "GUEST": "Guest",
    "LAN_DESCRIPTION": "Home network",
    "GUEST_DESCRIPTION": "Guest network",
    "WAN": "ISP",
    "WAN_DESCRIPTION": "Broadband connection",
    "WAN_VID": 2,
    "LAN_VID": 1,
    "LAN_SWITCH": "GigabitEthernet0",
    "WAN_SWITCH": "GigabitEthernet1",
    "MASTER": "WifiMaster0",
    "STA": "WifiMaster0/WifiStation0",
    "AP": [
        "WifiMaster0/AccessPoint0",
        "WifiMaster0/AccessPoint1",
        "WifiMaster0/AccessPoint2",
        "WifiMaster0/AccessPoint3"
    ],
    "GuestAP": "GuestWiFi",
    "GuestAPId": "WifiMaster0/AccessPoint1",
    "LAN_DHCP_POOL_NAME": "_WEBADMIN",
    "GAP_DHCP_POOL_NAME": "_WEBADMIN_GUEST_AP",
    "MASTER_5G": "WifiMaster1",
    "STA_5G": "WifiMaster1/WifiStation0",
    "AP_5G": [
        "WifiMaster1/AccessPoint0",
        "WifiMaster1/AccessPoint1",
        "WifiMaster1/AccessPoint2",
        "WifiMaster1/AccessPoint3"
    ],
    "MAX_LINES": 300,
    "DEBUG": false,
    "WAN_PORT": "WAN",
    "ETHER_WAN_PORT": "WAN",
    "WAN_PORTS": {
        "WAN": 1
    },
    "MODEM_INTERFACE_TYPES": {
        "UsbModem": true,
        "YotaOne": true,
        "Yota": true,
        "UsbLte": true,
        "CdcEthernet": true,
        "UsbDsl": true
    },
    "USB_PORTS_NUMBER": 2,
    "PORTS_MAP": {
        "LAN4": {
            "index": 0,
            "port": "4",
            "color": "yellow",
            "type": "ethernet",
            "name": "4",
            "iface": "GigabitEthernet0",
            "interfaceId": "GigabitEthernet0/3",
            "group": "LAN"
        },
        "LAN3": {
            "index": 1,
            "port": "3",
            "color": "yellow",
            "type": "ethernet",
            "name": "3",
            "iface": "GigabitEthernet0",
            "interfaceId": "GigabitEthernet0/2",
            "group": "LAN"
        },
        "LAN2": {
            "index": 2,
            "port": "2",
            "color": "yellow",
            "type": "ethernet",
            "name": "2",
            "iface": "GigabitEthernet0",
            "interfaceId": "GigabitEthernet0/1",
            "group": "LAN"
        },
        "LAN1": {
            "index": 3,
            "port": "1",
            "color": "yellow",
            "type": "ethernet",
            "name": "1",
            "iface": "GigabitEthernet0",
            "interfaceId": "GigabitEthernet0/0",
            "group": "LAN"
        },
        "WAN": {
            "index": 4,
            "port": "0",
            "color": "blue",
            "type": "ethernet",
            "name": "0",
            "iface": "GigabitEthernet1",
            "interfaceId": "GigabitEthernet1/0",
            "group": "WAN"
        }
    },
    "HAS_TWO_SWITCHES": true,
    "PORTS_IDS": {
        "0": "WAN",
        "1": "LAN1",
        "2": "LAN2",
        "3": "LAN3",
        "4": "LAN4"
    },
    "profile": {
        "config": {},
        "components": {},
        "languages": {
            "ru": true,
            "en": true,
            "uk": true,
            "tr": true,
            "es": true,
            "de": true,
            "fr": true,
            "it": true,
            "pl": true,
            "pt": true,
            "sv": true
        }
    }
};
window.NDM.profile.languages = {
    "en": true,
    "ru": true,
    "uk": true
};
