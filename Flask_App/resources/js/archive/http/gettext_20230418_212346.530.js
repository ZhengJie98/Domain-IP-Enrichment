/*
 * Script: gettext.js
 *  A script file that is run through the template renderer in order for
 *  translated strings to be used.
 *
 * Copyright:
 *  (c) 2009 Damien Churchill <damoxc@gmail.com>
 */

GetText = {
    maps: {},
    add: function(string, translation) {
        this.maps[string] = translation;
    },
    get: function(string) {
        if (this.maps[string]) {
            return this.maps[string];
        } else {
            return string;
        }
    }
}

function _(string) {
    return GetText.get(string);
}

// TorrentGrid.js:105
GetText.add('#', '#')

// DetailsTab.js:50
GetText.add('# of files', '# of files')

// Menus.js:206
GetText.add('0', '0')

// Menus.js:211
GetText.add('1', '1')

// Menus.js:100, Menus.js:137
GetText.add('10 KiB/s', '10 KiB/s')

// Menus.js:174
GetText.add('100', '100')

// Menus.js:216
GetText.add('2', '2')

// Menus.js:179
GetText.add('200', '200')

// Menus.js:221
GetText.add('3', '3')

// Menus.js:105, Menus.js:142
GetText.add('30 KiB/s', '30 KiB/s')

// Menus.js:184
GetText.add('300', '300')

// Menus.js:115, Menus.js:152
GetText.add('300 KiB/s', '300 KiB/s')

// Menus.js:226
GetText.add('5', '5')

// Menus.js:95, Menus.js:132
GetText.add('5 KiB/s', '5 KiB/s')

// Menus.js:169
GetText.add('50', '50')

// Menus.js:189
GetText.add('500', '500')

// Menus.js:110, Menus.js:147
GetText.add('80 KiB/s', '80 KiB/s')

// QueuePage.js:69
GetText.add('Active Torrents', 'Active Torrents')

// EditTrackersWindow.js:112, ConnectionManager.js:110, AddConnectionWindow.js:56, Toolbar.js:58, AddTrackerWindow.js:66, UrlWindow.js:50, FileWindow.js:53, AddWindow.js:52
GetText.add('Add', 'Add')

// AddConnectionWindow.js:40
GetText.add('Add Connection', 'Add Connection')

// OptionsTab.js:161
GetText.add('Add In Paused State', 'Add In Paused State')

// AddWindow.js:37
GetText.add('Add Torrents', 'Add Torrents')

// AddTrackerWindow.js:49
GetText.add('Add Tracker', 'Add Tracker')

// FileWindow.js:40
GetText.add('Add from File', 'Add from File')

// UrlWindow.js:36
GetText.add('Add from Url', 'Add from Url')

// DownloadsPage.js:146
GetText.add('Add torrents in Paused state', 'Add torrents in Paused state')

// TorrentGrid.js:176
GetText.add('Added', 'Added')

// FilterPanel.js:124
GetText.add('All', 'All')

// OptionsTab.js:94, DownloadsPage.js:100
GetText.add('Allocation', 'Allocation')

// DaemonPage.js:77
GetText.add('Allow Remote Connections', 'Allow Remote Connections')

// InterfacePage.js:78
GetText.add('Allow the use of multiple filters at once', 'Allow the use of multiple filters at once')

// StatusTab.js:119
GetText.add('Announce OK', 'Announce OK')

// StatusTab.js:120
GetText.add('Announce Sent', 'Announce Sent')

// OptionsTab.js:347, PreferencesWindow.js:107
GetText.add('Apply', 'Apply')

// Menus.js:238, OptionsTab.js:215
GetText.add('Auto Managed', 'Auto Managed')

// DownloadsPage.js:91
GetText.add('Autoadd .torrent files from', 'Autoadd .torrent files from')

// TorrentGrid.js:169
GetText.add('Avail', 'Avail')

// FileBrowser.js:47
GetText.add('Back', 'Back')

// OptionsTab.js:88, OptionsTab.js:124, BandwidthPage.js:42
GetText.add('Bandwidth', 'Bandwidth')

// OtherPage.js:66
GetText.add('Be alerted about new releases', 'Be alerted about new releases')

// Menus.js:280
GetText.add('Bottom', 'Bottom')

// MoveStorage.js:73, FileWindow.js:70, InstallPluginWindow.js:69
GetText.add('Browse', 'Browse')

// CachePage.js:41
GetText.add('Cache', 'Cache')

// CachePage.js:69
GetText.add('Cache Expiry (seconds)', 'Cache Expiry (seconds)')

// CachePage.js:63
GetText.add('Cache Size (16 KiB Blocks)', 'Cache Size (16 KiB Blocks)')

// EditTrackersWindow.js:56, OtherLimitWindow.js:72, RemoveWindow.js:55, MoveStorage.js:55, EditTrackerWindow.js:56, AddTrackerWindow.js:65, AddWindow.js:51
GetText.add('Cancel', 'Cancel')

// PreferencesWindow.js:85
GetText.add('Categories', 'Categories')

// InterfacePage.js:173
GetText.add('Certificate', 'Certificate')

// InterfacePage.js:117
GetText.add('Change', 'Change')

// ConnectionManager.js:284
GetText.add('Change Default Password', 'Change Default Password')

// InterfacePage.js:224
GetText.add('Change Successful', 'Change Successful')

// ConnectionManager.js:54, AddConnectionWindow.js:55, PreferencesWindow.js:106
GetText.add('Close', 'Close')

// DetailsTab.js:51
GetText.add('Comment', 'Comment')

// OptionsTab.js:117
GetText.add('Compact', 'Compact')

// InterfacePage.js:105
GetText.add('Confirm Password', 'Confirm Password')

// ConnectionManager.js:55, ConnectionManager.js:193
GetText.add('Connect', 'Connect')

// ConnectionManager.js:79
GetText.add('Connected', 'Connected')

// Menus.js:163
GetText.add('Connection Limit', 'Connection Limit')

// ConnectionManager.js:43, Toolbar.js:100
GetText.add('Connection Manager', 'Connection Manager')

// UI.js:151
GetText.add('Connection restored', 'Connection restored')

// Statusbar.js:57, DaemonPage.js:68
GetText.add('Connections', 'Connections')

// UrlWindow.js:68
GetText.add('Cookies', 'Cookies')

// DownloadsPage.js:83
GetText.add('Copy of .torrent files to', 'Copy of .torrent files to')

// Toolbar.js:52
GetText.add('Create', 'Create')

// Menus.js:89
GetText.add('D/L Speed Limit', 'D/L Speed Limit')

// NetworkPage.js:225, ProxyPage.js:70
GetText.add('DHT', 'DHT')

// Statusbar.js:210
GetText.add('DHT Nodes', 'DHT Nodes')

// DaemonPage.js:41
GetText.add('Daemon', 'Daemon')

// DaemonPage.js:57
GetText.add('Daemon port', 'Daemon port')

// Toolbar.js:45
GetText.add('Deluge', 'Deluge')

// DetailsTab.js:36
GetText.add('Details', 'Details')

// EncryptionPage.js:65, EncryptionPage.js:82
GetText.add('Disabled', 'Disabled')

// ConnectionManager.js:188
GetText.add('Disconnect', 'Disconnect')

// Menus.js:327, Deluge.js:163
GetText.add('Do Not Download', 'Do Not Download')

// QueuePage.js:107
GetText.add('Do not count slow torrents', 'Do not count slow torrents')

// EditTrackersWindow.js:107, Menus.js:274, Toolbar.js:89
GetText.add('Down', 'Down')

// TorrentGrid.js:211
GetText.add('Down Limit', 'Down Limit')

// TorrentGrid.js:130
GetText.add('Down Speed', 'Down Speed')

// FilesTab.js:63
GetText.add('Download', 'Download')

// OptionsTab.js:55
GetText.add('Download Location', 'Download Location')

// Statusbar.js:104
GetText.add('Download Speed', 'Download Speed')

// DownloadsPage.js:69
GetText.add('Download to', 'Download to')

// TorrentGrid.js:197
GetText.add('Downloaded', 'Downloaded')

// DownloadsPage.js:42
GetText.add('Downloads', 'Downloads')

// TorrentGrid.js:142
GetText.add('ETA', 'ETA')

// EditTrackersWindow.js:117
GetText.add('Edit', 'Edit')

// EditTrackerWindow.js:40
GetText.add('Edit Tracker', 'Edit Tracker')

// EditTrackersWindow.js:40, Menus.js:294, OptionsTab.js:332
GetText.add('Edit Trackers', 'Edit Trackers')

// EncryptionPage.js:99
GetText.add('Either', 'Either')

// EncryptionPage.js:64, EncryptionPage.js:81, PluginsPage.js:81
GetText.add('Enabled', 'Enabled')

// EncryptionPage.js:112
GetText.add('Encrypt entire stream', 'Encrypt entire stream')

// EncryptionPage.js:41
GetText.add('Encryption', 'Encryption')

// ConnectionManager.js:316, ConnectionManager.js:372, AddConnectionWindow.js:103, StatusTab.js:117, UrlWindow.js:116, FileWindow.js:103, AddWindow.js:211
GetText.add('Error', 'Error')

// Menus.js:323
GetText.add('Expand All', 'Expand All')

// UrlWindow.js:117
GetText.add('Failed to download torrent', 'Failed to download torrent')

// FileWindow.js:104
GetText.add('Failed to upload torrent', 'Failed to upload torrent')

// FileWindow.js:67, AddWindow.js:98
GetText.add('File', 'File')

// FileBrowser.js:36
GetText.add('File Browser', 'File Browser')

// OptionsPanel.js:143
GetText.add('File prioritization is unavailable when using Compact allocation. Would you like to switch to Full allocation?', 'File prioritization is unavailable when using Compact allocation. Would you like to switch to Full allocation?')

// FilesTab.js:40, FilesTab.js:50
GetText.add('Filename', 'Filename')

// FilesTab.js:35, FilesTab.js:41
GetText.add('Files', 'Files')

// Sidebar.js:55
GetText.add('Filters', 'Filters')

// PluginsPage.js:118
GetText.add('Find More', 'Find More')

// DownloadsPage.js:57
GetText.add('Folders', 'Folders')

// Menus.js:306
GetText.add('Force Recheck', 'Force Recheck')

// EncryptionPage.js:63, EncryptionPage.js:80
GetText.add('Forced', 'Forced')

// FileBrowser.js:50
GetText.add('Forward', 'Forward')

// Statusbar.js:216
GetText.add('Freespace in download location', 'Freespace in download location')

// OptionsTab.js:110
GetText.add('Full', 'Full')

// EncryptionPage.js:98
GetText.add('Full Stream', 'Full Stream')

// OptionsTab.js:293, OptionsTab.js:154, QueuePage.js:52
GetText.add('General', 'General')

// OtherPage.js:97
GetText.add('GeoIP Database', 'GeoIP Database')

// BandwidthPage.js:56
GetText.add('Global Bandwidth Usage', 'Global Bandwidth Usage')

// ProxyField.js:59
GetText.add('HTTP', 'HTTP')

// ProxyField.js:60
GetText.add('HTTP with Auth', 'HTTP with Auth')

// EncryptionPage.js:97
GetText.add('Handshake', 'Handshake')

// DetailsTab.js:47
GetText.add('Hash', 'Hash')

// Toolbar.js:107
GetText.add('Help', 'Help')

// Menus.js:337, Deluge.js:165
GetText.add('High Priority', 'High Priority')

// Menus.js:342, Deluge.js:166
GetText.add('Highest Priority', 'Highest Priority')

// FileBrowser.js:56
GetText.add('Home', 'Home')

// ConnectionManager.js:84, AddConnectionWindow.js:66, ProxyField.js:74
GetText.add('Host', 'Host')

// BandwidthPage.js:122
GetText.add('Ignore limits on local network', 'Ignore limits on local network')

// EncryptionPage.js:57
GetText.add('Inbound', 'Inbound')

// NetworkPage.js:51
GetText.add('Incoming Ports', 'Incoming Ports')

// PluginsPage.js:135
GetText.add('Info', 'Info')

// AddWindow.js:107
GetText.add('Infohash', 'Infohash')

// InstallPluginWindow.js:54, PluginsPage.js:113
GetText.add('Install', 'Install')

// InstallPluginWindow.js:40
GetText.add('Install Plugin', 'Install Plugin')

// InterfacePage.js:41, InterfacePage.js:53
GetText.add('Interface', 'Interface')

// InterfacePage.js:199
GetText.add('Invalid Password', 'Invalid Password')

// OptionsTab.js:114, OptionsTab.js:141
GetText.add('KiB/s', 'KiB/s')

// Statusbar.js:144, Statusbar.js:192
GetText.add('Kib/s', 'Kib/s')

// NetworkPage.js:219
GetText.add('LSD', 'LSD')

// EncryptionPage.js:91
GetText.add('Level', 'Level')

// StatusTab.js:61
GetText.add('Loading', 'Loading')

// MoveStorage.js:67, OtherPage.js:104
GetText.add('Location', 'Location')

// LoginWindow.js:45, LoginWindow.js:54
GetText.add('Login', 'Login')

// LoginWindow.js:130
GetText.add('Login Failed', 'Login Failed')

// Toolbar.js:114
GetText.add('Logout', 'Logout')

// OptionsTab.js:150, OptionsTab.js:143
GetText.add('Max Connections', 'Max Connections')

// OptionsTab.js:133
GetText.add('Max Down Speed', 'Max Down Speed')

// OptionsTab.js:97
GetText.add('Max Download Speed', 'Max Download Speed')

// OptionsTab.js:138
GetText.add('Max Up Speed', 'Max Up Speed')

// OptionsTab.js:173, OptionsTab.js:148
GetText.add('Max Upload Slots', 'Max Upload Slots')

// OptionsTab.js:123
GetText.add('Max Upload Speed', 'Max Upload Speed')

// BandwidthPage.js:103
GetText.add('Maximum Connection Attempts per Second', 'Maximum Connection Attempts per Second')

// BandwidthPage.js:68, BandwidthPage.js:147
GetText.add('Maximum Connections', 'Maximum Connections')

// BandwidthPage.js:82, BandwidthPage.js:161
GetText.add('Maximum Download Speed (KiB/s)', 'Maximum Download Speed (KiB/s)')

// BandwidthPage.js:96
GetText.add('Maximum Half-Open Connections', 'Maximum Half-Open Connections')

// BandwidthPage.js:75, BandwidthPage.js:154
GetText.add('Maximum Upload Slots', 'Maximum Upload Slots')

// BandwidthPage.js:89, BandwidthPage.js:168
GetText.add('Maximum Upload Speed (KiB/s)', 'Maximum Upload Speed (KiB/s)')

// MoveStorage.js:56
GetText.add('Move', 'Move')

// OptionsTab.js:262
GetText.add('Move Completed', 'Move Completed')

// OptionsTab.js:72
GetText.add('Move Completed Location', 'Move Completed Location')

// Menus.js:312, MoveStorage.js:38
GetText.add('Move Storage', 'Move Storage')

// DownloadsPage.js:75
GetText.add('Move completed to', 'Move completed to')

// NetworkPage.js:205
GetText.add('NAT-PMP', 'NAT-PMP')

// TorrentGrid.js:112, DetailsTab.js:46
GetText.add('Name', 'Name')

// NetworkPage.js:42
GetText.add('Network', 'Network')

// NetworkPage.js:188
GetText.add('Network Extras', 'Network Extras')

// NetworkPage.js:157
GetText.add('Network Interface', 'Network Interface')

// InterfacePage.js:101
GetText.add('New Password', 'New Password')

// ProxyField.js:55
GetText.add('None', 'None')

// Menus.js:332, Deluge.js:164
GetText.add('Normal Priority', 'Normal Priority')

// Statusbar.js:39
GetText.add('Not Connected', 'Not Connected')

// AddWindow.js:212
GetText.add('Not a valid torrent', 'Not a valid torrent')

// Menus.js:248
GetText.add('Off', 'Off')

// ConnectionManager.js:76
GetText.add('Offline', 'Offline')

// EditTrackersWindow.js:57, OtherLimitWindow.js:73, PreferencesWindow.js:108
GetText.add('Ok', 'Ok')

// InterfacePage.js:97
GetText.add('Old Password', 'Old Password')

// Menus.js:243
GetText.add('On', 'On')

// ConnectionManager.js:73
GetText.add('Online', 'Online')

// Menus.js:84, OptionsTab.js:49, OptionsTab.js:40, DownloadsPage.js:129
GetText.add('Options', 'Options')

// Statusbar.js:90, Statusbar.js:138, Statusbar.js:186, OtherPage.js:42, DaemonPage.js:84
GetText.add('Other', 'Other')

// EncryptionPage.js:74
GetText.add('Outbound', 'Outbound')

// NetworkPage.js:104
GetText.add('Outgoing Ports', 'Outgoing Ports')

// AddConnectionWindow.js:88, LoginWindow.js:70, ProxyField.js:101, InterfacePage.js:84, InterfacePage.js:214
GetText.add('Password', 'Password')

// DetailsTab.js:48
GetText.add('Path', 'Path')

// Menus.js:73, Toolbar.js:70
GetText.add('Pause', 'Pause')

// ProxyPage.js:52
GetText.add('Peer', 'Peer')

// NetworkPage.js:212
GetText.add('Peer Exchange', 'Peer Exchange')

// NetworkPage.js:181
GetText.add('Peer TOS Byte', 'Peer TOS Byte')

// TorrentGrid.js:155, TorrentGrid.js:225, PeersTab.js:63
GetText.add('Peers', 'Peers')

// BandwidthPage.js:135
GetText.add('Per Torrent Bandwidth Usage', 'Per Torrent Bandwidth Usage')

// DaemonPage.js:93
GetText.add('Periodically check the website for new releases', 'Periodically check the website for new releases')

// PluginsPage.js:92
GetText.add('Plugin', 'Plugin')

// InstallPluginWindow.js:66
GetText.add('Plugin Egg', 'Plugin Egg')

// PluginsPage.js:41
GetText.add('Plugins', 'Plugins')

// AddConnectionWindow.js:72, ProxyField.js:82, DaemonPage.js:52, InterfacePage.js:147
GetText.add('Port', 'Port')

// Toolbar.js:94, PreferencesWindow.js:47
GetText.add('Preferences', 'Preferences')

// OptionsTab.js:308
GetText.add('Prioritize First/Last', 'Prioritize First/Last')

// OptionsTab.js:167
GetText.add('Prioritize First/Last Pieces', 'Prioritize First/Last Pieces')

// DownloadsPage.js:140
GetText.add('Prioritize first and last pieces of torrent', 'Prioritize first and last pieces of torrent')

// FilesTab.js:60
GetText.add('Priority', 'Priority')

// OptionsTab.js:300
GetText.add('Private', 'Private')

// InterfacePage.js:166
GetText.add('Private Key', 'Private Key')

// TorrentGrid.js:124, FilesTab.js:52
GetText.add('Progress', 'Progress')

// Statusbar.js:200
GetText.add('Protocol Traffic Download/Upload', 'Protocol Traffic Download/Upload')

// ProxyPage.js:42
GetText.add('Proxy', 'Proxy')

// Menus.js:256, OptionsTab.js:196, QueuePage.js:41
GetText.add('Queue', 'Queue')

// QueuePage.js:62
GetText.add('Queue new torrents to top', 'Queue new torrents to top')

// BandwidthPage.js:129
GetText.add('Rate limit IP overhead', 'Rate limit IP overhead')

// TorrentGrid.js:162
GetText.add('Ratio', 'Ratio')

// EditTrackersWindow.js:122, ConnectionManager.js:117, Toolbar.js:64, AddWindow.js:112
GetText.add('Remove', 'Remove')

// Menus.js:300, RemoveWindow.js:39, RemoveWindow.js:57
GetText.add('Remove Torrent', 'Remove Torrent')

// RemoveWindow.js:56
GetText.add('Remove With Data', 'Remove With Data')

// OptionsTab.js:253
GetText.add('Remove at ratio', 'Remove at ratio')

// QueuePage.js:191
GetText.add('Remove torrent when share ratio is reached', 'Remove torrent when share ratio is reached')

// Menus.js:79, Toolbar.js:76
GetText.add('Resume', 'Resume')

// EditTrackerWindow.js:57
GetText.add('Save', 'Save')

// TorrentGrid.js:190
GetText.add('Save Path', 'Save Path')

// QueuePage.js:142
GetText.add('Seed Time (m)', 'Seed Time (m)')

// TorrentGrid.js:148, TorrentGrid.js:225
GetText.add('Seeders', 'Seeders')

// QueuePage.js:113
GetText.add('Seeding', 'Seeding')

// FileWindow.js:66
GetText.add('Select a torrent', 'Select a torrent')

// InstallPluginWindow.js:65
GetText.add('Select an egg', 'Select an egg')

// InterfacePage.js:129
GetText.add('Server', 'Server')

// InterfacePage.js:140
GetText.add('Session Timeout', 'Session Timeout')

// Statusbar.js:96
GetText.add('Set Maximum Connections', 'Set Maximum Connections')

// Statusbar.js:143
GetText.add('Set Maximum Download Speed', 'Set Maximum Download Speed')

// Statusbar.js:191
GetText.add('Set Maximum Upload Speed', 'Set Maximum Upload Speed')

// EncryptionPage.js:51, CachePage.js:52
GetText.add('Settings', 'Settings')

// QueuePage.js:120
GetText.add('Share Ratio Limit', 'Share Ratio Limit')

// QueuePage.js:131
GetText.add('Share Time Ratio', 'Share Time Ratio')

// InterfacePage.js:71
GetText.add('Show filters with zero torrents', 'Show filters with zero torrents')

// InterfacePage.js:64
GetText.add('Show session speed in titlebar', 'Show session speed in titlebar')

// TorrentGrid.js:118, FilesTab.js:44, FilesTab.js:54
GetText.add('Size', 'Size')

// ProxyField.js:56
GetText.add('Socksv4', 'Socksv4')

// ProxyField.js:57
GetText.add('Socksv5', 'Socksv5')

// ProxyField.js:58
GetText.add('Socksv5 with Auth', 'Socksv5 with Auth')

// ConnectionManager.js:200
GetText.add('Start Daemon', 'Start Daemon')

// Sidebar.js:34
GetText.add('State', 'State')

// ConnectionManager.js:68, StatusTab.js:39, DetailsTab.js:52
GetText.add('Status', 'Status')

// ConnectionManager.js:125, ConnectionManager.js:206, ConnectionManager.js:336
GetText.add('Stop Daemon', 'Stop Daemon')

// OptionsTab.js:225
GetText.add('Stop seed at ratio', 'Stop seed at ratio')

// QueuePage.js:168
GetText.add('Stop seeding when share ratio reaches:', 'Stop seeding when share ratio reaches:')

// OtherPage.js:72
GetText.add('System Information', 'System Information')

// NetworkPage.js:173
GetText.add('TOS', 'TOS')

// EditTrackersWindow.js:76
GetText.add('Tier', 'Tier')

// Menus.js:262
GetText.add('Top', 'Top')

// QueuePage.js:76
GetText.add('Total Active', 'Total Active')

// QueuePage.js:85
GetText.add('Total Active Downloading', 'Total Active Downloading')

// QueuePage.js:94
GetText.add('Total Active Seeding', 'Total Active Seeding')

// DetailsTab.js:49
GetText.add('Total Size', 'Total Size')

// EditTrackersWindow.js:80, TorrentGrid.js:183, EditTrackerWindow.js:66, DetailsTab.js:53, ProxyPage.js:64
GetText.add('Tracker', 'Tracker')

// Sidebar.js:35
GetText.add('Tracker Host', 'Tracker Host')

// AddTrackerWindow.js:75
GetText.add('Trackers', 'Trackers')

// ProxyField.js:48
GetText.add('Type', 'Type')

// Menus.js:126
GetText.add('U/L Speed Limit', 'U/L Speed Limit')

// NetworkPage.js:199
GetText.add('UPnP', 'UPnP')

// OptionsPanel.js:142
GetText.add('Unable to set file priority!', 'Unable to set file priority!')

// Statusbar.js:85, Statusbar.js:133, Statusbar.js:181, Menus.js:120, Menus.js:157, Menus.js:194, Menus.js:231
GetText.add('Unlimited', 'Unlimited')

// EditTrackersWindow.js:102, Menus.js:268, Toolbar.js:83, FileBrowser.js:53
GetText.add('Up', 'Up')

// TorrentGrid.js:218
GetText.add('Up Limit', 'Up Limit')

// TorrentGrid.js:136
GetText.add('Up Speed', 'Up Speed')

// Menus.js:288
GetText.add('Update Tracker', 'Update Tracker')

// OtherPage.js:56
GetText.add('Updates', 'Updates')

// Menus.js:200
GetText.add('Upload Slot Limit', 'Upload Slot Limit')

// Statusbar.js:152
GetText.add('Upload Speed', 'Upload Speed')

// TorrentGrid.js:204
GetText.add('Uploaded', 'Uploaded')

// InstallPluginWindow.js:78
GetText.add('Uploading your plugin...', 'Uploading your plugin...')

// FileWindow.js:82
GetText.add('Uploading your torrent...', 'Uploading your torrent...')

// UrlWindow.js:60, AddWindow.js:102
GetText.add('Url', 'Url')

// DownloadsPage.js:121
GetText.add('Use Compact', 'Use Compact')

// DownloadsPage.js:118
GetText.add('Use Full', 'Use Full')

// NetworkPage.js:60, NetworkPage.js:113
GetText.add('Use Random Ports', 'Use Random Ports')

// InterfacePage.js:158
GetText.add('Use SSL (paths relative to Deluge config folder)', 'Use SSL (paths relative to Deluge config folder)')

// AddConnectionWindow.js:83, ProxyField.js:93
GetText.add('Username', 'Username')

// ConnectionManager.js:90
GetText.add('Version', 'Version')

// StatusTab.js:118
GetText.add('Warning', 'Warning')

// ConnectionManager.js:285
GetText.add('We recommend changing the default password.<br><br>Would you like to change it now?', 'We recommend changing the default password.<br><br>Would you like to change it now?')

// ProxyPage.js:58
GetText.add('Web Seed', 'Web Seed')

// OtherPage.js:90
GetText.add('Yes, please send anonymous statistics', 'Yes, please send anonymous statistics')

// LoginWindow.js:131
GetText.add('You entered an incorrect password', 'You entered an incorrect password')

// InterfacePage.js:215
GetText.add('Your old password was incorrect!', 'Your old password was incorrect!')

// InterfacePage.js:225
GetText.add('Your password was successfully changed!', 'Your password was successfully changed!')

// InterfacePage.js:200
GetText.add('Your passwords don\'t match!', 'Your passwords don\'t match!')

