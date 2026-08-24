/**
 * Configuration file
 */
LPD_SERVER = 'webgate.ec.europa.eu';
LPD_SERVICES_URL = 'https://webgate.ec.europa.eu/cineagis/rest/services';
LPD_PROXY = "proxy.jsp";

/** Header **/
header_title = "CLIMATE, INFRASTRUCTURE AND ENVIRONMENT EXECUTIVE AGENCY / ENERGY";
header_subtitle = "PCI-PMI Transparency platform&nbsp;";
header_subsubtitle = "Projects of common interest & Projects of mutual interest - Interactive map";

/** Attributions / Copyright **/
map_services_copyright = "European Commission - CINEA - DG ENER - PLATTS";

/** Basemaps **/
basemap_button_title = "Select a background map";
basemap_title_text = "Select Background Map";
basemap_close_button_title = "Close";
basemap_close_button_text = "X";
defaultBaseMap = "OSM";
basemaps =
[
	{id: "OSM", layers: [{url: "https://gisco-services.ec.europa.eu/maps/tiles/OSMCartoComposite/EPSG3857/{level}/{col}/{row}.png",type:'webTiled'}], title: "OSM", thumbnailUrl: "assets/images/basemap/osmMapThumb.png", copyrightText: map_services_copyright + " | OpenStreetMap contributors, EC-GISCO, EuroGeographics for the administrative boundaries"},
	//{id: "Administrative", layers: [{url: LPD_SERVICES_URL + "/ENERGY/Basemap_Tiles/MapServer"}], title: "Administrative boundaries", thumbnailUrl: "assets/images/basemap/basemap_administrative_thumb.png", copyrightText: map_services_copyright},
	{id: "Satellite", layers: [{url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"}], title: "Satellite", thumbnailUrl:"assets/images/basemap/basemap_satellite_thumb.jpg", copyrightText: map_services_copyright + " | Earthstar Geographics"},
	{id: "Streets", layers: [{url: "https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer"}], title: "Streets", thumbnailUrl: "assets/images/basemap/basemap_streets_thumb.jpg", copyrightText: map_services_copyright + " | Esri, Garmin, NGA, USGS"},
	{id: "GreyCanvas", layers: [{url: "https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer"}], title: "Grey Canvas", thumbnailUrl: "assets/images/basemap/basemap_grey_canvas_thumb.png", copyrightText: map_services_copyright + " | Esri"},
	{id: "Topographic", layers: [{url: "https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer"}], title: "Topographic", thumbnailUrl: "assets/images/basemap/basemap_topographic_thumb.jpg", copyrightText: map_services_copyright + " | Esri, FAO, NOAA"}
];

POPUP_TEMPLATE = 
{
	title: "PCI/PMI Code: {PCI_CODE}",
	outFields: ["*"],
	content: ""
};

/** Operational Layers **/
operationalLayers =
[
	{
		id: "pci", url: LPD_SERVICES_URL + "/ENERGY/PCI/MapServer", visible:true, opacity: 1, subLayers:
		[
			{id: 34, title:'Oil pipeline', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 33, title:'Oil terminal', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 31, title:'Gas hub', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 30, title:'Gas pipeline', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 29, title:'Gas node', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 28, title:'Adaption low to high calorific gas', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 27, title:'Gas compressor station', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 26, title:'Gas reverse flow', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 25, title:'Underground gas storage', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 24, title:'LNG terminal', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 22, title:'Smart gas grids', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 20, title:'CO2 pipeline', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 19, title:'CO2 shipping route', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 18, title:'CO2 liquefaction and buffer storage',  visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 17, title:'Other essential CO2 equipment', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 16, title:'CO2 injection and surface facilities', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 14, title:'Smart electricity grids', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 13, title:'Smart electricity grids substation', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 11, title:'Hydrogen pipeline', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 10, title:'Other hydrogen assets', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 9, title:'Hydrogen storage', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 8, title:'Hydrogen terminal', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 7, title:'Electrolyser', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 5, title:'Offshore grids', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 4, title:'Baltic synchronisation', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 3, title:'Electricity line', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 2, title:'Electricity Substation', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE},
			{id: 1, title:'Electricity Storage', visible: true, definitionExpression: "", popupTemplate: POPUP_TEMPLATE}
		]
	},
	{
		id: "platts", url: LPD_SERVICES_URL + "/ENERGY/PLATTS/MapServer", visible:true, opacity: 1, subLayers:
		[
			{id: 9, title:'Existing oil refineries', visible: false, definitionExpression: "1=1"},
			{id: 8, title:'Existing crude oil pipelines', visible: false, definitionExpression: "1=1"},
			{id: 7, title:'Existing oil product pipelines', visible: false, definitionExpression: "1=1"},
			{id: 5, title:'Existing gas pipeline', visible: false, definitionExpression: "1=1"},
			{id: 4, title:'Existing underground gas storage', visible: false, definitionExpression: "1=1"},
			{id: 3, title:'Existing LNG terminal', visible: false, definitionExpression: "1=1"},
			{id: 1, title:'Existing power grid', visible: false, definitionExpression: "1=1"}
		]
	}
];

pci_all_service = LPD_SERVICES_URL + "/ENERGY/PCI_ALL/MapServer";

/** Toc Layers **/
tocLayers =
[
	{'name': "Electricity", 'type': 'group', 'visible': true, 'expand': true, 'layerId': 'elec', 'listLayers':
		[
			{'name':'Electricity Storage', 'layerId':1, 'serviceName':"PCI", 'type':'feature', 'visible':true},
			{'name':'Electricity Substation', 'layerId':2, 'serviceName':"PCI", 'type':'feature', 'visible':true},
			{'name':'Electricity line', 'layerId':3, 'serviceName':"PCI", 'type':'feature', 'visible':true},
			{'name':'Baltic synchronisation', 'layerId':4, 'serviceName':"PCI", 'type':'feature', 'visible':true},
			{'name':'Offshore grids', 'layerId':5, 'serviceName':"PCI", 'type':'feature', 'visible':true},
			{'name':'Existing power grid', 'layerId':1, 'serviceName':"PLATTS", 'type':'feature', 'visible':false}
		]
	},

	{'name': "Hydrogen and electrolysers", 'type': 'group', 'visible': true, 'expand': true, 'layerId': 'hydrogen', 'listLayers':
		[
			{'name':'Hydrogen pipeline', 'layerId':11, 'serviceName':'PCI', 'type':'feature', 'visible':true},
			{'name':'Electrolyser', 'layerId':7, 'serviceName':'PCI', 'type':'feature', 'visible':true},
			{'name':'Hydrogen terminal', 'layerId':8, 'serviceName':'PCI', 'type':'feature', 'visible':true},
			{'name':'Hydrogen storage', 'layerId':9, 'serviceName':'PCI', 'type':'feature', 'visible':true},
			{'name':'Other hydrogen assets', 'layerId':10, 'serviceName':'PCI', 'type':'feature', 'visible':true}
		]
	},
	
	{'name': "Smart electricity grids", 'type': 'group', 'visible': true, 'expand': true, 'layerId': 'smart_elec', 'listLayers':
		[
			{'name':'Smart electricity grids substation', 'layerId':13, 'serviceName':'PCI', 'type':'feature', 'visible':true},
			{'name':'Smart electricity grids', 'layerId':14, 'serviceName':'PCI', 'type':'feature', 'visible':true}
		]
	},

	{'name': "CO2 networks", 'type': 'group', 'visible': true, 'expand': true, 'layerId': 'carbone', 'listLayers':
		[
			{'name':'CO2 pipeline', 'layerId':20, 'serviceName':'PCI', 'type':'feature', 'visible':true},
			{'name':'CO2 injection and surface facilities', 'layerId':16, 'serviceName':'PCI', 'type':'feature', 'visible':true},
			{'name':'CO2 liquefaction and buffer storage', 'layerId':18, 'serviceName':'PCI', 'type':'feature', 'visible':true},
			{'name':'CO2 shipping route', 'layerId':19, 'serviceName':'PCI', 'type':'feature', 'visible':true},
			{'name':'Other essential CO2 equipment', 'layerId':17, 'serviceName':'PCI', 'type':'feature', 'visible':true}
		]
	},

	{'name': "Smart gas grids", 'type': 'group', 'visible': true, 'expand': true, 'layerId': 'smart_gas', 'listLayers':
		[
			{'name':'Smart gas grids', 'layerId':22, 'serviceName':'PCI', 'type':'feature', 'visible':true}
		]
	},

	{'name': "Natural gas", 'type': 'group', 'visible': true, 'expand': true, 'layerId': 'gas', 'listLayers':
		[
			{'name':'LNG terminal', 'layerId':24, 'serviceName':"PCI", 'type':'feature', 'visible':true},
			{'name':'Underground gas storage', 'layerId':25, 'serviceName':"PCI", 'type':'feature', 'visible':true},
			{'name':'Gas reverse flow', 'layerId':26, 'serviceName':"PCI", 'type':'feature', 'visible':true},
			{'name':'Gas compressor station', 'layerId':27, 'serviceName':"PCI", 'type':'feature', 'visible':true},
			{'name':'Adaption low to high calorific gas', 'layerId':28, 'serviceName':"PCI", 'type':'feature', 'visible':true},
			{'name':'Gas node', 'layerId':29, 'serviceName':"PCI", 'type':'feature', 'visible':true},
			{'name':'Gas pipeline', 'layerId':30, 'serviceName':"PCI", 'type':'feature', 'visible':true},
			{'name':'Gas hub', 'layerId':31, 'serviceName':"PCI", 'type':'feature', 'visible':true},
			{'name':'Existing LNG terminal', 'layerId':3, 'serviceName':"PLATTS", 'type':'feature', 'visible':false},
			{'name':'Existing underground gas storage', 'layerId':4, 'serviceName':"PLATTS", 'type':'feature', 'visible':false},
			{'name':'Existing gas pipeline', 'layerId':5, 'serviceName':"PLATTS", 'type':'feature', 'visible':false}
		]
	},
	
	{'name': "Oil", 'type': 'group', 'visible': true, 'expand': true, 'layerId': 'oil', 'listLayers':
		[
			{'name':'Oil terminal', 'layerId':33, 'serviceName':'PCI', 'type':'feature', 'visible':true},
			{'name':'Oil pipeline', 'layerId':34, 'serviceName':'PCI', 'type':'feature', 'visible':true},
			{'name':'Existing oil product pipelines', 'layerId':7, 'serviceName':'PLATTS', 'type':'feature', 'visible':false},
			{'name':'Existing crude oil pipelines', 'layerId':8, 'serviceName':'PLATTS', 'type':'feature', 'visible':false},
			{'name':'Existing oil refineries', 'layerId':9, 'serviceName':'PLATTS', 'type':'feature', 'visible':false}
		]
	}
];

/** TOC Widget **/
toc_collapse_title = "Collapse";
toc_expand_title = "Expand";
toc_hide_layer_title = "Hide Layer";
toc_show_layer_title = "Show Layer";

/** Print **/
PRINT_URL = LPD_SERVICES_URL + "/ENERGY/SecurePrint/GPServer/SecurePrint/execute";
print_format = "jpg";

/** Filters **/
filter_status_list = [{label:'All',code:'ALL',selected:true},{label:'Under consideration',code:1,selected:false},{label:'Planned but not yet permitting',code:2,selected:false},{label:'Permitting',code:3,selected:false},{label:'Under construction',code:4,selected:false},{label:'Commissioned',code:5,selected:false}];
filter_country_list = [{label:'All',code:"EU",country:'all'},{label:'Austria - AT',code:"AT",country:'austria'},{label:'Belgium - BE',code:"BE",country:'belgium'},{label:'Bulgaria - BG',code:"BG",country:'bulgaria'},{label:'Croatia - HR',code:"HR",country:'croatia'},{label:'Cyprus - CY',code:"CY",country:'cyprus'},{label:'Czech Republic - CZ',code:"CZ",country:'czech_republic'},{label:'Denmark - DK',code:"DK",country:'denmark'},{label:'Estonia - EE',code:"EE",country:'estonia'},{label:'Finland - FI',code:"FI",country:'finland'},{label:'France - FR',code:"FR",country:'france'},{label:'Germany - DE',code:"DE",country:'germany'},{label:'Greece - EL',code:"EL",country:'greece'},{label:'Hungary - HU',code:"HU",country:'hungary'},{label:'Ireland - IE',code:"IE",country:'ireland'},{label:'Italy - IT',code:"IT",country:'italy'},{label:'Latvia - LV',code:"LV",country:'latvia'},{label:'Lithuania - LT',code:"LT",country:'lithuania'},{label:'Luxembourg - LU',code:"LU",country:'luxembourg'},{label:'Malta - MT',code:"MT",country:'malta'},{label:'The Netherlands - NL',code:"NL",country:'the_netherlands'},{label:'Poland - PL',code:"PL",country:'poland'},{label:'Portugal - PT',code:"PT",country:'portugal'},{label:'Romania - RO',code:"RO",country:'romania'},{label:'Slovakia - SK',code:"SK",country:'slovakia'},{label:'Slovenia - SI',code:"SI",country:'slovenia'},{label:'Spain - ES',code:"ES",country:'spain'},{label:'Sweden - SE',code:"SE",country:'sweden'}];
filter_cef_funding_list = [{label:'All', code:'ALL'}, {label:'Works', code:'Works'}, {label:'Studies', code:'Studies'}, {label:'No CEF funding', code:'NONE'}];
filter_pci_pmi_list = [{label:'All', code:'ALL'}, {label:'PCI', code:'PCI'}, {label:'PMI', code:'PMI'}];
filter_pci_list = [{label:'All', code:'ALL', id: 10000}];
filter_commissioning_year_min = "1900";
filter_commissioning_year_max = "2100";
filter_commissioning_year_label = "Enter Year";
filter_commissioning_year_list_title = "List of Year(s) selected :";
filter_commissioning_year_remove_title = "Remove Year";

filter_label_project_status = "Project Status";
filter_label_network_type = "Network Type";
filter_label_corridor = "Priority Corridor";
filter_label_country = "Member State";
filter_label_cef_e_funding = "CEF-E Funding";
filter_label_commissioning_year = "Commissioning Year";
filter_label_pci_codes = "PCI/PMI Code(s)";
filter_label_pci_pmi = "PCI / PMI";
filter_label_pci_list = "PCI/PMI List(s)";

filter_print_title_project_status = "<bol>Project Status:</bol>";
filter_print_title_network_type = "<bol>Network Type:</bol>";
filter_print_title_corridor_new = "<bol>Priority Corridor (TEN-E Regulation 2022/8691):</bol>";
filter_print_title_corridor = "<bol>Priority Corridor (TEN-E Regulation 347/2013):</bol>";
filter_print_title_country = "<bol>Country:</bol>";
filter_print_title_cef_e_funding = "<bol>CEF-E Funding:</bol>";
filter_print_title_commissioning_year = "<bol>Commissioning Year:</bol>";
filter_print_title_pci_codes = "<bol>PCI/PMI Code(s):</bol>";
filter_print_title_pci_pmi = "<bol>PCI vs PMI:</bol>";
filter_print_title_pci_list = "<bol>PCI/PMI List(s):</bol>";
filter_print_text_no_filter = "All Projects of Common Interest and Projects of Mutual Interest shown";

filter_info_project_status = "It shows the projects according to their implementation status. For projects in the 1st PCI-PMI list and subsequent lists, all projects can be selected, regardless of their status, while for projects in previous PCI lists (1st to 5th PCI lists), only PCIs commissioned or under construction will be shown.";
filter_info_network_type = "It shows the projects belonging to the different energy networks: Electricity, Hydrogen and electrolysers, Smart electricity grids, Smart gas grids, Gas, CO2 and Oil.";
filter_info_corridor = "It shows the projects belonging to the different trans-European energy infrastructure priority corridors and thematic areas established in Annex I of Regulation (EU) 2022/869 (TEN-E Regulation) and former Regulation (EU) 347/2013.";
filter_info_country = "It shows the projects concerning the different EU Member States.";
filter_info_cef_e_funding = "It shows the projects which have received (or not) EU funding from the Connecting Europe Facility Energy programme.";
filter_info_commissioning_year = "It shows the projects which are expected to be commissioned on a selected year.";
filter_info_pci_codes = "It shows any projects corresponding to the PCI-PMI code(s) selected, from any PCI-PMI lists";
filter_info_pci_pmi = "It shows Projects of Common Interest and/or Projects of Mutual Interest";
filter_info_pci_list = "It shows PCI-PMI list(s)";

filter_reset_text = "Clear selection";

filter_placeholder_pci_codes = "Enter a PCI/PMI Code";
filter_list_title_pci_codes = "List of PCI/PMI Code(s) selected :";
filter_remove_pci_codes = "Remove PCI/PMI Code";

filter_network_list =
[
	{title: "Electricity", layerId: "elec", img: "assets/images/network/electricity.png"},
	{title: "Hydrogen and electrolysers", layerId: "hydrogen", img: "assets/images/network/hydrogen.png"},
	{title: "Smart electricity grids", layerId: "smart_elec", img: "assets/images/network/smart_electricity_grids.png"},
	{title: "CO2 networks", layerId: "carbone", img: "assets/images/network/carbone.png"},
	{title: "Smart gas grids", layerId: "smart_gas", img: "assets/images/network/smart_gas_grids.png"},
	{title: "Natural gas", layerId: "gas", img: "assets/images/network/gas.png"},
	{title: "Oil", layerId: "oil", img: "assets/images/network/oil.png"},
	{title: "All", layerId: "all", img: "assets/images/network/all.png"}
];

/* elec */
elec_ids_def = [1,2,3,4,5];
hydro_ids_def = [7,8,9,10,11];
smart_elec_ids_def = [13,14];
carbone_ids_def = [16,17,18,19,20];
smart_gas_ids_def = [22];
gas_ids_def = [24,25,26,27,28,29,30,31];
oil_ids_def = [33,34];

/** Corridors layers definitions **/ // invert order because ids are ordered by DESC in operational layers
nsog_def = ["CORRIDOR_NUMBER=9","CORRIDOR_NUMBER=9","CORRIDOR_NUMBER=9","CORRIDOR_NUMBER=9","CORRIDOR_NUMBER=9"];
nsi_west_elec_def = ["CORRIDOR_NUMBER=7","CORRIDOR_NUMBER=7","CORRIDOR_NUMBER=7","CORRIDOR_NUMBER=7","CORRIDOR_NUMBER=7"];
nsi_east_elec_def = ["CORRIDOR_NUMBER=5","CORRIDOR_NUMBER=5","CORRIDOR_NUMBER=5","CORRIDOR_NUMBER=5","CORRIDOR_NUMBER=5"];
bemip_elec_def = ["CORRIDOR_NUMBER=1","CORRIDOR_NUMBER=1","CORRIDOR_NUMBER=1","CORRIDOR_NUMBER=1","CORRIDOR_NUMBER=1"];
nsi_west_gas_def = ["CORRIDOR_NUMBER=8","CORRIDOR_NUMBER=8","CORRIDOR_NUMBER=8","CORRIDOR_NUMBER=8","CORRIDOR_NUMBER=8","CORRIDOR_NUMBER=8","CORRIDOR_NUMBER=8","CORRIDOR_NUMBER=8"];
nsi_east_gas_def = ["CORRIDOR_NUMBER=6","CORRIDOR_NUMBER=6","CORRIDOR_NUMBER=6","CORRIDOR_NUMBER=6","CORRIDOR_NUMBER=6","CORRIDOR_NUMBER=6","CORRIDOR_NUMBER=6","CORRIDOR_NUMBER=6"];
south_gas_def = ["CORRIDOR_NUMBER=11","CORRIDOR_NUMBER=11","CORRIDOR_NUMBER=11","CORRIDOR_NUMBER=11","CORRIDOR_NUMBER=11","CORRIDOR_NUMBER=11","CORRIDOR_NUMBER=11","CORRIDOR_NUMBER=11"];
bemip_gas_def = ["CORRIDOR_NUMBER=2","CORRIDOR_NUMBER=2","CORRIDOR_NUMBER=2","CORRIDOR_NUMBER=2","CORRIDOR_NUMBER=2","CORRIDOR_NUMBER=2","CORRIDOR_NUMBER=2","CORRIDOR_NUMBER=2"];
oil_def = ["CORRIDOR_NUMBER=10","CORRIDOR_NUMBER=10"];
smart_grids_def = ["CORRIDOR_NUMBER=12","CORRIDOR_NUMBER=12"];
highway_elec_def = ["ISHIGHWAY=1 and IMPLEMENTATION_STATUS<>3","ISHIGHWAY=1 and IMPLEMENTATION_STATUS<>3","ISHIGHWAY=1 and IMPLEMENTATION_STATUS<>3","ISHIGHWAY=1 and IMPLEMENTATION_STATUS<>5","ISHIGHWAY=1 and IMPLEMENTATION_STATUS<>5"]; // corridor number 4 old(11)
carbone_def = ["CORRIDOR_NUMBER=3","CORRIDOR_NUMBER=3","CORRIDOR_NUMBER=3","CORRIDOR_NUMBER=3","CORRIDOR_NUMBER=3"];

nsi_west_elec_new_def = ["CORRIDOR_NUMBER=13","CORRIDOR_NUMBER=13","CORRIDOR_NUMBER=13","CORRIDOR_NUMBER=13","CORRIDOR_NUMBER=13"];
nsi_east_elec_new_def = ["CORRIDOR_NUMBER=14","CORRIDOR_NUMBER=14","CORRIDOR_NUMBER=14","CORRIDOR_NUMBER=14","CORRIDOR_NUMBER=14"];
bemip_elec_new_def = ["CORRIDOR_NUMBER=15","CORRIDOR_NUMBER=15","CORRIDOR_NUMBER=15","CORRIDOR_NUMBER=15","CORRIDOR_NUMBER=15"];
nsog_new_def = ["CORRIDOR_NUMBER=16","CORRIDOR_NUMBER=16","CORRIDOR_NUMBER=16","CORRIDOR_NUMBER=16","CORRIDOR_NUMBER=16"];
bemip_off_def = ["CORRIDOR_NUMBER=17","CORRIDOR_NUMBER=17","CORRIDOR_NUMBER=17","CORRIDOR_NUMBER=17","CORRIDOR_NUMBER=17"];
sw_off_def = ["CORRIDOR_NUMBER=18","CORRIDOR_NUMBER=18","CORRIDOR_NUMBER=18","CORRIDOR_NUMBER=18","CORRIDOR_NUMBER=18"];
se_off_def = ["CORRIDOR_NUMBER=19","CORRIDOR_NUMBER=19","CORRIDOR_NUMBER=19","CORRIDOR_NUMBER=19","CORRIDOR_NUMBER=19"];
atlantic_off_def = ["CORRIDOR_NUMBER=20","CORRIDOR_NUMBER=20","CORRIDOR_NUMBER=20","CORRIDOR_NUMBER=20","CORRIDOR_NUMBER=20"];
hi_west_def = ["CORRIDOR_NUMBER=21","CORRIDOR_NUMBER=21","CORRIDOR_NUMBER=21","CORRIDOR_NUMBER=21","CORRIDOR_NUMBER=21"];
hi_east_def = ["CORRIDOR_NUMBER=22","CORRIDOR_NUMBER=22","CORRIDOR_NUMBER=22","CORRIDOR_NUMBER=22","CORRIDOR_NUMBER=22"];
bemip_hydro_def = ["CORRIDOR_NUMBER=23","CORRIDOR_NUMBER=23","CORRIDOR_NUMBER=23","CORRIDOR_NUMBER=23","CORRIDOR_NUMBER=23"];
smart_grids_new_def = ["CORRIDOR_NUMBER=24","CORRIDOR_NUMBER=24"];
carbone_new_def = ["CORRIDOR_NUMBER=25","CORRIDOR_NUMBER=25","CORRIDOR_NUMBER=25","CORRIDOR_NUMBER=25","CORRIDOR_NUMBER=25"];
smart_gas_grids_def = ["CORRIDOR_NUMBER=26"];
article_24_def = ["CORRIDOR_NUMBER=27","CORRIDOR_NUMBER=27","CORRIDOR_NUMBER=27","CORRIDOR_NUMBER=27","CORRIDOR_NUMBER=27","CORRIDOR_NUMBER=27","CORRIDOR_NUMBER=27","CORRIDOR_NUMBER=27"];


// old corridors
filter_corridors_label = "<b>TEN-E Regulation 347/2013</b>";
nsog_countries = ["BE","DK","FR","DE","IE","LU","NL","SE"];//,"UK"];// UK remove
nsi_west_elec_countries = ["AT","BE","FR","DE","IE","IT","LU","NL","MT","PT","ES"]; //UK"];// UK remove
east_countries = ["AT","BG","HR","CZ","CY","DE","EL","HU","IT","PL","RO","SK","SI"];  // nsi_east_elec_countries, nsi_east_gas_countries, hi_east_countries
bemip_countries = ["DK","EE","FI","DE","LV","LT","PL","SE"]; // bemip_elec_countries, bemip_gas_countries, bemip_hydro_countries
nsi_west_gas_countries = ["BE","DK","FR","DE","IE","IT","LU","MT","NL","PT","ES"] //,"UK"]; // UK remove
south_gas_countries = ["AT","BG","HR","CZ","CY","FR","DE","EL","HU","IT","PL","RO","SK","SI"];
oil_countries = ["AT","HR","CZ","DE","HU","PL","SI"];
all_countries = ["EU"]; //smart_grids_countries, highway_elec_countries, carbone_countries, smart_gas_grids

// new corridors
filter_corridors_new_label = "<b>TEN-E Regulation 2022/869</b>";
nsi_west_elec_countries_new = ["AT","BE","DE","DK","ES","FR","IE","IT","LU","NL","MT","PT"]; // UK remove and DK add
nsog_countries_new = ["BE","DK","FR","DE","IE","LU","NL","SE"]; // UK remove
sw_off_countries = ["EL","ES","FR","IT","MT","PT"];
se_off_countries = ["BG","HR","EL","IT","CY","RO","SI"];
atlantic_off_countries = ["IE","ES","FR","PT"];
hi_west_countries = ["AT","BE","CZ","DE","DK","ES","FR","IE","IT","LU","NL","MT","PT"]; // CZ add
article_24_countries = ["CY","MT","IT","EL"];

filter_corridors_new =
[
	{id: "nsi_west_elec_new", title: "1.NSI West Electricity", img: "assets/images/corridors/new/NSI West Electricity.png", layerId: "pci", type: "elec", def_ids: elec_ids_def, def: nsi_west_elec_new_def, countries: nsi_west_elec_countries_new},
	{id: "nsi_east_elec_new", title: "2.NSI East Electricity", img: "assets/images/corridors/new/NSI East Electricity.png", layerId: "pci", type: "elec", def_ids: elec_ids_def, def: nsi_east_elec_new_def, countries: east_countries},
	{id: "bemip_elec_new", title: "3.BEMIP Electricity", img: "assets/images/corridors/new/BEMIP Electricity.png", layerId: "pci", type: "elec", def_ids: elec_ids_def, def: bemip_elec_new_def, countries: bemip_countries},
	{id: "nsog_new", title: "4.Northern Seas offshore", img: "assets/images/corridors/new/NSOG.png", layerId: "pci", type: "elec", def_ids: elec_ids_def, def: nsog_new_def, countries: nsog_countries_new},
	{id: "bemip_off", title: "5.BEMIP offshore", img: "assets/images/corridors/new/BEMIP offshore.png", layerId: "pci", type: "elec", def_ids: elec_ids_def, def: bemip_off_def, countries: bemip_countries},
	{id: "sw_off", title: "6.SW Offshore", img: "assets/images/corridors/new/SW offshore.png", layerId: "pci", type: "elec", def_ids: elec_ids_def, def: sw_off_def, countries: sw_off_countries},
	{id: "se_off", title: "7.SE Offshore", img: "assets/images/corridors/new/SE offshore.png", layerId: "pci", type: "elec", def_ids: elec_ids_def, def: se_off_def, countries: se_off_countries},
	{id: "atlantic_off", title: "8.Atlantic Offshore", img: "assets/images/corridors/new/Atlantic offshore grids.png", layerId: "pci", type: "elec", def_ids: elec_ids_def, def: atlantic_off_def, countries: atlantic_off_countries},
	{id: "hi_west", title: "9.HI West", img: "assets/images/corridors/new/HI West.png", layerId: "pci", type: "hydrogen", def_ids: hydro_ids_def, def: hi_west_def, countries: hi_west_countries},
	{id: "hi_east", title: "10.HI East", img: "assets/images/corridors/new/HI East.png", layerId: "pci", type: "hydrogen", def_ids: hydro_ids_def, def: hi_east_def, countries: east_countries},
	{id: "bemip_hydro", title: "11.BEMIP Hydrogen", img: "assets/images/corridors/new/BEMIP Hydrogen.png", layerId: "pci", type: "hydrogen", def_ids: hydro_ids_def, def: bemip_hydro_def, countries: bemip_countries},
	{id: "smart_grids_new", title: "12.Smart electricity grids", img: "assets/images/corridors/new/Smart_electricity_grids.png", layerId: "pci", type: "smart_elec", def_ids: smart_elec_ids_def, def: smart_grids_new_def, countries: all_countries},
	{id: "carbone_new", title: "13.Cross-border CO<sub>2</sub> Network", img: "assets/images/corridors/new/CO2.png", layerId: "pci", type: "carbone", def_ids: carbone_ids_def, def: carbone_new_def, countries: all_countries},
	{id: "smart_gas_grids", title: "14.Smart gas grids", img: "assets/images/corridors/new/Smart_gas_grids.png", layerId: "pci", type: "smart_gas", def_ids: smart_gas_ids_def, def: smart_gas_grids_def, countries: all_countries},
	{id: "article_24", title: "15.Article 24 derogation", img: "assets/images/corridors/new/Article 24 derogation.png", layerId: "pci", type: "gas", def_ids: gas_ids_def, def: article_24_def, countries: article_24_countries},
	{id: "all_new", title: "All", img: "assets/images/corridors/new/All.png", layerId: "all", type:"all", def_ids: [], def: [], countries: []}
];

filter_corridors = 
[
	{id: "nsog", title: "1.Northern Seas offshore", img: "assets/images/corridors/NSOG.png", layerId: "pci", type: "elec", def_ids: elec_ids_def, def: nsog_def, countries: nsog_countries},
	{id: "nsi_west_elec", title: "2.NSI West Electricity", img: "assets/images/corridors/West_elec.png", layerId: "pci", type: "elec", def_ids: elec_ids_def, def: nsi_west_elec_def, countries: nsi_west_elec_countries},
	{id: "nsi_east_elec", title: "3.NSI East Electricity", img: "assets/images/corridors/East_elec.png", layerId: "pci", type: "elec", def_ids: elec_ids_def, def: nsi_east_elec_def, countries: east_countries},
	{id: "bemip_elec", title: "4.BEMIP Electricity", img: "assets/images/corridors/Bemip_elec.png", layerId: "pci", type: "elec", def_ids: elec_ids_def, def: bemip_elec_def, countries: bemip_countries},
	{id: "nsi_west_gas", title: "5.NSI West Gas", img: "assets/images/corridors/West_gas.png", layerId: "pci", type: "gas", def_ids: gas_ids_def, def: nsi_west_gas_def, countries: nsi_west_gas_countries},
	{id: "nsi_east_gas", title: "6.NSI East Gas", img: "assets/images/corridors/East_gas.png", layerId: "pci", type: "gas", def_ids: gas_ids_def, def: nsi_east_gas_def, countries: east_countries},
	{id: "south_gas", title: "7.Southern Gas Corridor", img: "assets/images/corridors/South_gas.png", layerId: "pci", type: "gas", def_ids: gas_ids_def, def: south_gas_def, countries: south_gas_countries},
	{id: "bemip_gas", title: "8.BEMIP Gas", img: "assets/images/corridors/Bemip_gas.png", layerId: "pci", type: "gas", def_ids: gas_ids_def, def: bemip_gas_def, countries: bemip_countries},
	{id: "oil", title: "9.OSC in Central Eastern Europe", img: "assets/images/corridors/East_oil.png", layerId: "pci", type: "oil", def_ids: oil_ids_def, def: oil_def, countries: oil_countries},
	{id: "smart_grids", title: "10.Smart Grids", img: "assets/images/corridors/Smart_Grids.png", layerId: "pci", type: "smart_elec", def_ids: smart_elec_ids_def, def: smart_grids_def, countries: all_countries},
	{id: "highway_elec", title: "11.Electricity Highway Thematic", img: "assets/images/corridors/Highway_elec.png", layerId: "pci", type: "elec", def_ids: elec_ids_def, def: highway_elec_def, countries: all_countries},
	{id: "carbone_", title: "12.Cross-border CO<sub>2</sub> Network", img: "assets/images/corridors/CO2.png", layerId: "pci", type: "carbone", def_ids: carbone_ids_def, def: carbone_def, countries: all_countries},
	{id: "all", title: "All", img: "assets/images/corridors/All.png", layerId: "all", type: "all", def_ids: [], def: [], countries: []}
];

/** Fields **/
pciIdField = "PCI_ID";
pciCodeField = "PCI_CODE";
pciProjectFullTitleField = "PROJECT_FULL_TITLE";
pcimplementationStatusDescrField = "IMPLEMENTATION_STATUS_DESCR";
pciListNameField = "LIST_NAME";
pciPromotersField = "PROMOTERS";
pciTechnicalDescrField = "TECHNICAL_DESCR";
pciCommissionDateField = "COMMISSIONING_DATE";
pciCefActionsField = "CEF_ACTIONS";
pciCefActionFichesField = "CEF_ACTION_FICHES";
pciActiveListField = "PCI_LIST_ACTIVE";
pciImplementationStatusField = "IMPLEMENTATION_STATUS";
pciCountryConcernedField = "COUNTRY_CONCERNED";
pciStudiesOrWorkField = "STUDIES_OR_WORKS";
pciNatureCodeField = "NATURE_CODE";
pciListIdField = "PCI_LIST_ID";

pciAllListNameField = "PCI_LIST_NAME";

/** Search **/
searchFields = [ pciCodeField, pciProjectFullTitleField, pciPromotersField ];
searchPlaceholder = "PCI/PMI Code / Title / Promoters";

/** Help Tour **/
tour_intro_1 = "This is for selecting a background map.";
tour_intro_2 = "This is the link to the contact page, copyright, application version and supported browsers";
tour_intro_3 = "Here you can see the signification of the map symbols and you can also narrow your choice by unchecking boxes";
tour_intro_4 = "Here you can select the projects by filtering per project status, network type (sector), priority corridor, country, whether they have received CEF-E funding or not, commissioning year and PCI and/or PMI";
tour_intro_5 = "This is for exporting the map to image or pdf document";
tour_intro_6 = "To search for a project, type at least the three first characters of the project code, promoters or title, then select from the result list";
tour_intro_7 = "Click here to zoom in or out the map, you could also use the mouse wheel. To zoom out to a specific area, press the Shift key and drag a rectangle by holding the left mouse button";
tour_intro_8 = "Click here to zoom to visible data";
tour_intro_9 = "To display further details of a project, you need to click on the symbol in the map, click on the 'PCI/PMI fiche - implementation plan' links. The pdf related to the selected project will open in a new tab";

tour_help_button_text = "Help";
tour_start_button_text = "Start the tour";
tour_start_warning_title_text = "Help Tour - Warning";
tour_start_warning_text = "By using the help tour, you will lose all the selection you've done until now.";
tour_start_continue_text = "Do you want to continue ?";
tour_start_cancel_button_text = "Cancel";
tour_start_continue_button_text = "Continue";
tour_start_close_button_title = "Close";
tour_start_close_button_text = "X";

/** Menu **/
menu_filter_bar_label = "Projects selection";
menu_layer_bar_label = "Project type";
menu_print_bar_label = "Export Map";
menu_show_text = "Click to show the Project type/selection/export panel";
menu_hide_text = "Click to hide the Project type/selection/export panel";
menu_navigation_label = "Type/Selection/Export";

/** Pop up **/
// Pop up fiche link
dg_ener_website = 'https://ec.europa.eu/assets/cinea/PCI/files/';

popup_content_fields = 
[
	{name:pciProjectFullTitleField, label: "Title:"},
	{name:pcimplementationStatusDescrField, label: "Implementation Status:"},
	{name:pciListNameField, label: "PCI/PMI List:"},
	{name:pciPromotersField, label: "Promoters:"},
	{name:pciTechnicalDescrField, label: "Technical Description:"},
	{name:pciCommissionDateField, label: "Commissioning Date:"},
	{name:pciCefActionsField, label: "CEF Actions:"}
];

popup_title = "PCI/PMI Code: {code}";
popup_zoom_text = "Zoom";
popup_fiche_text = "PCI/PMI Fiche - Implementation plan";
popup_fiche_link = dg_ener_website + "{nature_code}Fiche_{code}_{list}.pdf";

/** Zoom to data **/
zoom_data_button_title = "Zoom to data";

/** Welcome Page **/
welcome_page_title = "Energy PCI-PMI Transparency Platform – Welcome page";
welcome_page_button_skip_text = "SKIP";
welcome_page_close_button_title = "Close";
welcome_page_close_button_text = "X";
welcome_page_text = "<p class='p-main'>"
	+ "Modern energy infrastructure is crucial for an integrated energy market, security of supply and for enabling the EU to meet its broader climate and energy goals."
	+ " The Transparency Platform is a public information system available to every EU citizen in line with the <a href=\"https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32022R0869\" target='_blank' class='a-link'>TEN-E Regulation</a> (Art.23) that provides detailed information about Energy Projects of Common Interest (PCIs) and Projects of Mutual Interest (PMIs), including:"
	+ "</p>"
	+ "<ul class='ul-style'>"
	+ "<li>a) geographical representation,</li>"
	+ "<li>b) technical description,</li>"
	+ "<li>c) implementation plan and dates,</li>"
	+ "<li>d) benefits to the Member States and local communities and costs of the projects except for commercially sensitive information,</li>"
	+ "<li>e) the European Union financial support,</li>"
	+ "<li>f) links to national manuals of procedures for permit granting,</li>"
	+ "<li>g) existing sea basin studies and plans for each priority offshore grid corridor.</li>"
	+ "</ul>"
	+ "<p class='p-main'>"
	+ "The PCI-PMI Transparency Platform provides up to date information on the geographic location for each of the <a href=\"https://energy.ec.europa.eu/topics/infrastructure/projects-common-interest-and-projects-mutual-interest/pci-and-pmi-selection-process_en\" target='_blank' class='a-link'>Projects of Common Interest (PCI) & Projects of Mutual Interest (PMI)</a> in the latest PCI-PMI list published by the European Commission."
	+ " These projects relate to networks for electricity, offshore grids, hydrogen and electrolysers, cross-border carbon dioxide and smart grids in electricity and gas."
	+ " For each Project of Common Interest (PCI) and Project of Mutual Interest (PMI), the PCI-PMI fiche and PCI-PMI implementation plan are published."
	+ " In addition, completed PCIs and PMIs from previous lists can be displayed by using the filtering option. For projects in electricity and hydrogen, information on the results from the cost-benefit analysis on the basis of the methodology drawn up pursuant to Article 11 of the TEN-Regulation can be found on <a href=\"https://tyndp.entsoe.eu/\" target='_blank' class='a-link'>ENTSO-E</a> and <a href=\"https://www.entsog.eu/\" target='_blank' class='a-link'>ENTSOG</a> websites."
	+ " The underlying grid is based on information related to energy networks in Europe, Russia and the Middle East from S&P Global PLATTS Geospatial Database."
	+ "</p>"
	+ "<p class='p-main'>"
	+ "The infrastructure types shown in the PCI-PMI Transparency platform include all the detailed infrastructure items that are part of Projects of Common Interest and Projects of Mutual Interest, in line with the general infrastructure categories as defined by TEN-E Regulation Annex II but not limited to them."
	+ "</p>"
	+ "<p class='p-main'>"
	+ "CINEA maintains this service to enhance public access to information about these initiatives and European Union in general."
	+ " Our goal is to keep this information timely and accurate."
	+ " However, CINEA accepts no responsibility or liability whatsoever with regard to the information on this site."
	+ " Information displayed at the viewer is downloadable and it can be reused if reference is mentioned."
	+ " The PCI-PMI fiche, implementation plan and map can be downloaded and printed out by using the print icon and selecting the type."
	+ " Anything beyond these functionalities is not provided."
	+ " Please be aware that the data related to the PCI/PMI infrastructures included on this platform, including topographic maps and geographical information system (GIS) data, may be shared with European Commission services for purposes related to the Commission's policy and regulatory requirements."
	+ " The GIS representation of projects displayed in this TP does not prejudge and may not coincide with the final route of the projects."
	+ "</p>";
	
/** About **/
about_button_title = "About";
about_button_back_title = "Back";
about_text = "<p class='p-main'><b class='b-title'>About and additional information:</b>"
	+ "<br>Modern energy infrastructure is crucial for an integrated energy market, security of supply and for enabling the EU to meet its broader climate and energy goals."
	+ " The Transparency Platform is a public information system available to every EU citizen in line with the <a href=\"https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32022R0869\" target='_blank' class='a-link'>TEN-E Regulation</a> (Art.23) that provides detailed information about Energy Projects of Common Interest (PCIs) and Projects of Mutual Interest (PMIs), including:"
	+ "</p>"
	+ "<ul class='ul-style'>"
	+ "<li>a) geographical representation,</li>"
	+ "<li>b) technical description,</li>"
	+ "<li>c) implementation plan and dates,</li>"
	+ "<li>d) benefits to the Member States and local communities and costs of the projects except for commercially sensitive information,</li>"
	+ "<li>e) the European Union financial support,</li>"
	+ "<li>f) links to national manuals of procedures for permit granting,</li>"
	+ "<li>g) existing sea basin studies and plans for each priority offshore grid corridor.</li>"
	+ "</ul>"
	+ "<p class='p-main'>"
	+ "The PCI-PMI Transparency Platform provides up to date information on the geographic location for each of the <a href=\"https://energy.ec.europa.eu/topics/infrastructure/projects-common-interest-and-projects-mutual-interest/pci-and-pmi-selection-process_en\" target='_blank' class='a-link'>Projects of Common Interest (PCI) & Projects of Mutual Interest (PMI)</a> in the latest PCI-PMI list published by the European Commission."
	+ " These projects relate to networks for electricity, offshore grids, hydrogen and electrolysers, cross-border carbon dioxide and smart grids in electricity and gas."
	+ " For each Project of Common Interest (PCI) and Project of Mutual Interest (PMI), the PCI-PMI fiche and PCI-PMI implementation plan are published."
	+ " In addition, completed PCIs and PMIs from previous lists can be displayed by using the filtering option. For projects in electricity and hydrogen, information on the results from the cost-benefit analysis on the basis of the methodology drawn up pursuant to Article 11 of the TEN-Regulation can be found on <a href=\"https://tyndp.entsoe.eu/\" target='_blank' class='a-link'>ENTSO-E</a> and <a href=\"https://www.entsog.eu/\" target='_blank' class='a-link'>ENTSOG</a> websites."
	+ " The underlying grid is based on information related to energy networks in Europe, Russia and the Middle East from S&P Global PLATTS Geospatial Database."
	+ "</p>"
	+ "<p class='p-main'>"
	+ "In relation to the two last items f) and g), information on the national manuals of procedures for permit granting and existing sea basin studies and plans for each priority offshore grid corridor can be found in the following sources:"
	+ "</p>"
	+ "<p class='p-main'>"
	+ "<a href='" + dg_ener_website + "National manuals of procedures for permitting.xlsx' target='_blank' class='a-link'>National manuals of procedures for permit granting</a>"
	+ "</p>"
	+ "<p class='p-main a-link'>"
	+ "Existing sea basin studies and plans for each priority offshore grid corridor"
	+ "<ul class='ul-style'>"
	+ "<li><a href='https://maritime-spatial-planning.ec.europa.eu/msp-practice/seabasins' target='_blank' class='a-link'>European Maritime Spatial Planning Platform (MSP) – European Sea Basins</a></li>"
	+ "<li><a href='https://energy.ec.europa.eu/topics/renewable-energy/offshore-renewable-energy_en#eu-strategy-on-offshore-renewable-energy' target='_blank' class='a-link'>Offshore renewable energy (europa.eu)</a></li>"
	+ "<li><a href='https://energy.ec.europa.eu/topics/infrastructure/high-level-groups/baltic-energy-market-interconnection-plan_en#documents' target='_blank' class='a-link'>Baltic energy market interconnection plan (europa.eu)</a></li>"
	+ "<li><a href='https://op.europa.eu/en/publication-detail/-/publication/434fb711-a5a4-11ec-83e1-01aa75ed71a1' target='_blank' class='a-link'>Study on the Central and South Eastern Europe energy connectivity (CESEC) cooperation on electricity grid development and renewables</a></li>"
	+ "</ul>"
	+ "</p>"
	+ "<p class='p-main'>"
	+ "The infrastructure types shown in the PCI-PMI Transparency platform include all the detailed infrastructure items that are part of Projects of Common Interest and Projects of Mutual Interest, in line with the general infrastructure categories as defined by TEN-E Regulation Annex II but not limited to them."
	+ " The project type ‘Other hydrogen assets’ corresponds to the infrastructure category in Annex II.(3).(d)." 
	+ " The project type ‘CO2 shipping route’ shows indicative shipping routes for maritime transport of CO2 considered for each PCI, but shipping is not included as an infrastructure category in Annex II of the TEN-E Regulation and therefore is not part of PCIs-PMIs."
	+ "</p>"
	+ "<p class='p-main'>"
	+ "Detailed information on projects and actions supported by CEF-Energy is published on CINEA website:"
	+ "<br><a href='https://cinea.ec.europa.eu/cinea-data-hubs_en' target='_blank' class='a-link'>https://cinea.ec.europa.eu/cinea-data-hubs_en</a>"
	+ "</p>"
	+ "<p class='p-main'>"
	+ "Information on PCI monitoring can be found on the website of the Agency for the Cooperation of Energy Regulators (ACER), at:"
	+ "<br><a href='https://acer.europa.eu' target='_blank' class='a-link'>https://acer.europa.eu</a>"
	+ "</p>"
	+ "<p class='p-sub'>"
	+ "<b class='b-title'>Contact and disclaimer:</b>"
	+ "<br>CINEA maintains this service to enhance public access to information about these initiatives and European Union in general."
	+ "Our goal is to keep this information timely and accurate."
	+ " However, CINEA accepts no responsibility or liability whatsoever with regard to the information on this site."
	+ " In particular, CINEA aims to have links to external sources updated and functional but it cannot guarantee that links do not change over time and may not be fully updated at all times."
	+ " Information displayed at the viewer is downloadable and it can be reused if reference is mentioned."
	+ " The PCI-PMI fiche, implementation plan and map can be downloaded and printed out by using the print icon and selecting the type."
	+ " Anything beyond these functionalities is not provided."
	+ " Please be aware that the data related to the PCI/PMI infrastructures included on this platform, including topographic maps and geographical information system (GIS) data, may be shared with European Commission services for purposes related to the Commission's policy and regulatory requirements."
	+ " The GIS representation of projects displayed in this TP does not prejudge and may not coincide with the final route of the projects."
	+ "</p>"
	+ "<p class='p-main'>"
	+ "PCI-PMI promoters may proactively contact CINEA to provide updated information on their projects or correct any inaccurate data if relevant by writing to: <a href='mailto:CINEA-B4@ec.europa.eu' class='a-link'>CINEA-B4@ec.europa.eu</a>"
	+ "</p>"
	+ "<p class='p-main'>"
	+ "Any further questions or comments relating to the PCI-PMI Interactive map Viewer can also be addressed to: <a href='mailto:CINEA-B4@ec.europa.eu' class='a-link'>CINEA-B4@ec.europa.eu</a>"
	+ "</p>"
	+ "<p class='p-main'>"
	+ "If you have a general question regarding the European Union, you might use the EUROPE DIRECT Freephone Number 00 800 6 7 8 9 10 11 from anywhere in the 28 Member States and reach an operator who speaks your language, or submit in your language your question to the <a href='https://europa.eu/european-union/contact/write-to-us_en' target='_blank' class='a-link'>EUROPE DIRECT mailbox</a>."
	+ "<br>"
	+ "<br><a href='https://ec.europa.eu/info/legal-notice_en' target='_blank' class='a-link'>Legal notice</a>"
	+ "<br>"
	+ "<br><a href='https://www.spglobal.com/platts/en/products-services/electric-power/gis-data' target='_blank' class='a-link'>PLATTS website</a>"
	+ "<br>"
	+ "<br><a href='https://ec.europa.eu/energy/' target='_blank' class='a-link'>DG Energy homepage</a>"
	+ "</p>"
	+ "<p class='p-sub'><b class='b-title'>Version:</b>"
	+ "<br>Current version : 7.0.4"
	+ "<br>Date: 24.06.2026"
	+ "</p>"
	+ "<p class='p-sub'><b>Supported internet navigators:</b>"
	+ "<br>Edge 115 or above"
	+ "<br>FireFox 117 or above, Firefox 115 (ESR)"
	+ "<br>Chrome 115 or above"
	+ "<br>Safari 16 or above"
	+ "<br>Safari on IOS 16 or above"
	+ "</p>"
	+ "<p class='p-sub'>"
	+ "<b class='b-title'>Changelog:</b>"
	+ "<br>Release 7.X.X including:"
	+ "<ul class='ul-style'>"
	+ "<li>Improve design for the Viewer</li>"
	+ "<li>Update ESRI Javascript API to version 5.X</li>"
	+ "<li>Add new filter for PCI/PMI lists</li>"
	+ "<li>Update project status filter</li>"
	+ "<li>Load data on client side</li>"
	+ "<li>Operations (Filter, Search, Identify, Layer Visibility) are done on client side</li>"
	+ "</ul>"
	+ "</p>"
	+ "<p class='p-sub'><b class='b-title'>Copyright:</b>"
	+ "<br>© PLATTS for the underlying grids for electricity, gas and oil, 2023"
	+ "<br>© European Union, 2026"
	+ "</p>";