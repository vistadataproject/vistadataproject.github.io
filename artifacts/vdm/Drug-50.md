---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Drug-50 

 property | value 
--- | --- 
 id | Drug-50
 fmId | 50
 label | Drug
 location | ^PSDRUG(
 description | {::nomarkdown}This file holds the information related to each drug that can be used<br/>to fill a prescription.  It is pointed to from several other files and<br/>should be handled carefully, usually only by special individuals in the<br/>pharmacy service.  Entries are not typically deleted, but rather made<br/>inactive by entering an inactive date.<br/> <br/>This file must be built by Pharmacy Service BEFORE going on-line.  It is<br/>common to use another centers file and edit it to match your center's<br/>unique formulary.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| number | .001 | Number | {::nomarkdown}This field contains the internal record number of the drug.  {:/} | IEN |  |  |  | 
| generic_name | .01 | Generic Name | {::nomarkdown}This is the generic name of the drug. In addition, if this entry is marked<br/>for CMOP transmission, the generic name cannot be edited unless it is<br/>UNmarked for CMOP transmission first.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| va_classification | 2 | VA Classification | {::nomarkdown}  This is the VA classification for this drug.{:/} | STRING |  |  |  | 
| pharmacy_orderable_item | 2.1 | Pharmacy Orderable Item | {::nomarkdown}Name used by ORDER ENTRY/RESULTS REPORTING.{:/} | POINTER |  | INDEXED | Pharmacy_Orderable_Item-50_7 | 
| dea_special_hdlg | 3 | Dea, Special Hdlg | {::nomarkdown}This field is used to show the DEA Special Handling .{:/} | STRING |  |  |  | 
| maximum_dose_per_day | 4 | Maximum Dose Per Day | {::nomarkdown}This field is used as a standard maximum dosage.{:/} | NUMERIC |  |  |  | 
| standard_sig | 5 | Standard Sig | {::nomarkdown}This field is used as a standard default for medication instructions.{:/} | STRING |  |  |  | 
| fsn | 6 | Fsn | {::nomarkdown}  This is the federal stock number of this drug.{:/} | STRING |  |  |  | 
| warning_label | 8 | Warning Label | {::nomarkdown}This field is used to indicate if a warning should be printed with the<br/>selection of this drug.{:/} | STRING |  |  |  | 
| new_warning_label_list | 8.1 | New Warning Label List | {::nomarkdown}Enter a comma-delimited list of warning numbers from old and new warning <br/>files, following new file entries with an \N\.{:/} | STRING |  |  |  | 
| gender_specific_lbls_on_all_rx | 8.2 | Gender Specific Lbls On All Rx | {::nomarkdown}If this field contains \N\, warning labels that are marked with a SPECIFIC<br/>TO GENDER value of \M\ for Male or \F\ for Female will only print for this<br/>drug when the patient is that specific gender. If this field is null or <br/>contains a \Y\, then the warning will print for both genders.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| synonym | 9 | Synonym | {::nomarkdown}This multiple contains the Synonym, NDC Code, Intended Use, VSN, Order <br/>Unit, Price per Order Unit, Dispense Units per Order Unit, Price per <br/>Dispense Unit, and Vendor fields. It is used for a quick code for look <br/>ups or to locate NDCs to increment the drug's inventory when orders <br/>are received.{:/} | [OBJECT] |  |  | [Synonym-50_1](#Synonym-50_1)  | 
| reorder_level | 11 | Reorder Level | {::nomarkdown}This field is used to indicate the reorder level for this drug.{:/} | NUMERIC |  |  |  | 
| order_unit | 12 | Order Unit | {::nomarkdown}  This is the order unit for this drug.{:/} | POINTER |  |  | Order_Unit-51_5 | 
| price_per_order_unit | 13 | Price Per Order Unit | {::nomarkdown}  This is the price per order unit for this drug.{:/} | NUMERIC |  |  |  | 
| normal_amount_to_order | 14 | Normal Amount To Order | {::nomarkdown}  This is the normal amount to order for this drug.{:/} | NUMERIC |  |  |  | 
| dispense_unit | 14.5 | Dispense Unit | {::nomarkdown}  This is the dispense unit for this drug.{:/} | STRING |  |  |  | 
| dispense_units_per_order_unit | 15 | Dispense Units Per Order Unit | {::nomarkdown}  This is the dispense units per order unit for this drug.{:/} | NUMERIC |  |  |  | 
| price_per_dispense_unit | 16 | Price Per Dispense Unit | {::nomarkdown}  This is the price per dispense unit for this drug.{:/} | NUMERIC |  |  |  | 
| source_of_supply | 17 | Source Of Supply | {::nomarkdown}This field is used to indicate the source of the supply for this medication/<br/>supply.{:/} | STRING |  |  |  | 
| expiration_date | 17.1 | Expiration Date | {::nomarkdown}This field is used to show the expiration date of the current supply of<br/>available drugs.{:/} | DATE-TIME |  | INDEXED |  | 
| lab_test_monitor | 17.2 | Lab Test Monitor | {::nomarkdown}This is the lab test results which should be checked before this drug <br/>is dispensed.{:/} | POINTER |  |  | Laboratory_Test-60 | 
| monitor_max_days | 17.3 | Monitor Max Days | {::nomarkdown}This is the number of days during which the results of the lab test are<br/>of interest when dispensing this drug.{:/} | NUMERIC |  |  |  | 
| specimen_type | 17.4 | Specimen Type | {::nomarkdown}This is the specimen type on which the lab test should be run.{:/} | POINTER |  |  | Topography_Field-61 | 
| monitor_routine | 17.5 | Monitor Routine | {::nomarkdown}This is the name of the routine which is called to do all necessary<br/>checking on lab test results before dispensing this drug.{:/} | STRING |  |  |  | 
| lab_monitor_mark | 17.6 | Lab Monitor Mark | {::nomarkdown}This field is set to \1\ if the drug is marked for Lab Monitor purposes.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| clozapine_lab_test | 17.7 | Clozapine Lab Test |  | [OBJECT] |  |  | [Clozapine_Lab_Test-50_02](#Clozapine_Lab_Test-50_02)  | 
| national_drug_file_entry | 20 | National Drug File Entry | {::nomarkdown}This is the pointer to the National Drug file (^PSNDF).{:/} | POINTER |  | INDEXED | [VA_Generic-50_6](VA_Generic-50_6.md) | 
| va_product_name | 21 | VA Product Name | {::nomarkdown}This is the VA Product Name matched to in the National Drug file.{:/} | STRING |  | INDEXED |  | 
| psndf_va_product_name_entry | 22 | Psndf VA Product Name Entry | {::nomarkdown}This is the pointer to the VA Product file in the National Drug File package.{:/} | POINTER |  |  | [VA_Product-50_68](VA_Product-50_68.md) | 
| package_size | 23 | Package Size | {::nomarkdown}This is the pointer to the Package Size file.{:/} | POINTER |  |  | Package_Size-50_609 | 
| package_type | 24 | Package Type | {::nomarkdown}This is the pointer to the Package Type file.{:/} | POINTER |  |  | Package_Type-50_608 | 
| national_drug_class | 25 | National Drug Class | {::nomarkdown}This is the pointer to the VA Drug Class file.{:/} | POINTER |  | INDEXED | [VA_Drug_Class-50_605](VA_Drug_Class-50_605.md) | 
| cmop_id | 27 | Cmop Id | {::nomarkdown}This field contains the VA CMOP National Identifier from NDF.{:/} | STRING |  | INDEXED |  | 
| op_external_dispense | 28 | Op External Dispense | {::nomarkdown}Indicates if this drug may be dispensed to an external interface dispensing<br/>machine.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| national_formulary_indicator | 29 | National Formulary Indicator | {::nomarkdown}This field will be used to determine whether this drug is on the National<br/>Formulary. Data will be maintained at the national level. This field will<br/>be populated during the NDF matching process. The data cannot be edited at<br/>the local level.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| ndc | 31 | Ndc | {::nomarkdown}This is the National Drug Code for this drug.{:/} | STRING |  |  |  | 
| ndc_by_outpatient_site | 32 | Ndc By Outpatient Site |  | [OBJECT] |  |  | [Ndc_By_Outpatient_Site-50_032](#Ndc_By_Outpatient_Site-50_032)  | 
| drug_text_entry | 37 | Drug Text Entry |  | [POINTER] |  |  | {id:Drug_Text-51_7} | 
| action_profile_message_op | 40 | Action Profile Message (op) | {::nomarkdown}This message will be printed on the Outpatient action profile along<br/>with the other information for each prescription for this drug.{:/} | STRING |  |  |  | 
| current_inventory | 50 | Current Inventory | {::nomarkdown}This field contains the current number of the drug in stock.{:/} | NUMERIC |  |  |  | 
| local_nonformulary | 51 | Local Non-formulary | {::nomarkdown}  This is used to designate the drug as non-formulary.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>N/F</dd></dl>{:/} | 
| visn_nonformulary | 52 | Visn Non-formulary | {::nomarkdown}This field will designate a drug that is not on the VISN Formulary.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>V-N/F</dd></dl>{:/} | 
| day_nd_or_dose_nl_limit | 62.01 | Day (nd) Or Dose (nl) Limit | {::nomarkdown}  This is mainly for NARCOTICS and ANTIBIOTICS.  If a number is found here<br/>when this medication is selected for a UNIT DOSE order, that number will be<br/>used to calculate the DEFAULT value for the STOP DATE/TIME prompt in the<br/>entry of that order.  If the number entered is followed by a \D\, that<br/>number of days will be added to the START DATE.  If the number is followed<br/>by an \L\, that number will be used to calculate the DOSE LIMIT.{:/} | STRING |  |  |  | 
| unit_dose_med_route | 62.02 | Unit Dose Med Route | {::nomarkdown}  If data is found here when this medication is selected for a UNIT DOSE<br/>order, that data will be used as the DEFAULT value for the MED ROUTE prompt<br/>in ORDER ENTRY.  Please note that ORAL is not selectable as a MED ROUTE<br/>here, since it is the standard default value in order entry.<br/> <br/>here, since it is the standard default value in order entry.{:/} | POINTER |  |  | Medication_Routes-51_2 | 
| unit_dose_schedule_type | 62.03 | Unit Dose Schedule Type | {::nomarkdown}  If data is found here when this medication is selected for a UNIT DOSE <br/>order, that data will be used as the DEFAULT value for the SCHEDULE TYPE <br/>prompt in ORDER ENTRY.<br/>  Please note that you will NOT find CONTINUOUS as a SCHEDULE TYPE here,<br/>since it is the standard default in order entry.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>R</dt><dd>FILL on REQUEST</dd><dt>P</dt><dd>PRN</dd><dt>OC</dt><dd>ON CALL</dd><dt>O</dt><dd>ONE TIME</dd></dl>{:/} | 
| unit_dose_schedule | 62.04 | Unit Dose Schedule | {::nomarkdown}  If a schedule is found here when this medication is selected for a<br/>UNIT DOSE order, that schedule will be used as a default value for the<br/>SCHEDULE prompt in order entry.{:/} | STRING |  |  |  | 
| corresponding_outpatient_drug | 62.05 | Corresponding Outpatient Drug | {::nomarkdown}  This is used by the Unit Dose Medications package in such things as the<br/>Authorized Absence/Discharge Orders form.{:/} | POINTER |  |  | [Drug-50](Drug-50.md) | 
| application_packages_use | 63 | Application Packages' Use | {::nomarkdown}This field is free text, but contains the codes of the DHCP packages<br/>that consider this drug part of its formulary.  This field is set through<br/>the routine ^PSGIU, and NOT through VA FileMan.<br/> <br/>NOTES: Uneditable through VA FileMan.{:/} | STRING |  | INDEXED |  | 
| primary_drug | 64 | *primary Drug | {::nomarkdown}  This is the corresponding Primary Drug for this dispense drug.  A primary<br/>drug does not have a dosage associated with it.{:/} | POINTER |  |  |  | 
| formulary_alternative | 65 | Formulary Alternative | {::nomarkdown}  This is a formulary alternative to this non-formulary drug.  Any formulary<br/>alternatives are shown to non-pharmacists whenever they attempt to order a<br/>non-formulary drug.{:/} | [POINTER] |  |  | {id:Drug-50} | 
| daw_code | 81 | Daw Code | {::nomarkdown}Dispensed As Written code. This information is used for NCPDP electronic claim transmission to third party payers (insurance companies).{:/} | NUMERIC |  |  |  | 
| ncpdp_dispense_unit | 82 | Ncpdp Dispense Unit | {::nomarkdown}The NCPDP QUANTITY MULTIPLIER field and this field are used to determine<br/>metric quantity for electronic 3rd Party billing purposes.  <br/> <br/>This field indicates the NCPDP standard billing Unit of Measure (EA -<br/>EACH; GM - GRAMS; ML - MILLILITERS).  {:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>GM</dt><dd>GRAMS</dd><dt>ML</dt><dd>MILLILITERS</dd><dt>EA</dt><dd>EACH</dd></dl>{:/} | 
| ncpdp_quantity_multiplier | 83 | Ncpdp Quantity Multiplier | {::nomarkdown}The NCPDP DISPENSE UNIT field and this field are used to determine <br/>metric quantity for electronic 3rd Party billing purposes.<br/> <br/>This field contains the number that will be multiplied by the quantity<br/>in the prescription in order to determine the correct quantity to <br/>electronically bill 3rd party insurance companies.{:/} | NUMERIC |  | REQUIRED |  | 
| inactive_date | 100 | Inactive Date | {::nomarkdown}This is the date the drug is inactive.{:/} | DATE-TIME |  |  |  | 
| message | 101 | Message | {::nomarkdown}Message displayed whenever drug is selected for RX.  Commonly used to<br/>warn about restrictions to certain services, doctors, etc.  This is<br/>purely a passive informational free text field.{:/} | STRING |  |  |  | 
| restriction | 102 | Restriction | {::nomarkdown}  This is any restrictions that may apply to this drug.{:/} | STRING |  |  |  | 
| atc_canister | 212 | Atc Canister | {::nomarkdown}  This is the ATC dispensing machine canister number(s) for this<br/>drug by ward group.  If a ward group does not have a canister number, the<br/>pick lists for the ward group will not send this drug to the ATC.{:/} | [OBJECT] |  |  | [Atc_Canister-50_0212](#Atc_Canister-50_0212)  | 
| atc_canister-212_1 | 212.1 | *atc Canister | {::nomarkdown}  This should be the number of the canister from the Baxter ATC 212 dispensing<br/>machine that contains this drug.  If no number is entered here, the Unit<br/>Dose package will assume that this drug is NOT currently in the ATC.{:/} | NUMERIC |  |  |  | 
| atc_mnemonic | 212.2 | Atc Mnemonic | {::nomarkdown}  This is the link between the Unit Dose package and the ATC dispensing<br/>machine.  The data here is sent to the ATC, and therefore MUST match the<br/>mnemonic entered for this same drug in the ATC.  If the mnemonic entered<br/>here does not match a mnemonic within the ATC, any pick list with this<br/>mnemonic sent to the ATC will not complete.{:/} | STRING |  | INDEXED |  | 
| cmop_dispense | 213 | Cmop Dispense | {::nomarkdown}Indicates if this drug may be dispensed from the Consolidated Mail<br/>Outpatient Pharmacy System.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| activity_log | 214 | Activity Log | {::nomarkdown}Date the activity occurred.<br/> {:/} | [OBJECT] |  |  | [Activity_Log-50_0214](#Activity_Log-50_0214)  | 
| quantity_dispense_message | 215 | Quantity Dispense Message | {::nomarkdown}This is a free text description used by pharmacy personnel to indicate<br/>which quantities for the drug/item are stocked by the Outpatient Pharmacy<br/>system for this facility.{:/} | STRING |  |  |  | 
| inpatient_pharmacy_location | 300 | Inpatient Pharmacy Location | {::nomarkdown}Enter from 1 to 3 location codes, each separated by commas, that define the<br/>location of this item in the inpatient pharmacy storage.  This will be used<br/>to sort Automatic Replenishment reports for easier location of items.{:/} | STRING |  |  |  | 
| ar_ws_amis_category | 301 | Ar/ws Amis Category | {::nomarkdown}This refers to the category that this drug is to be classified as for AMIS <br/>statistics in Automatic Replenishment/Ward Stock.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>3</dt><dd>Field 22 - Blood Products</dd><dt>1</dt><dd>Field 06 or 07 - Units of Issue</dd><dt>0</dt><dd>Field 03 or 04 - Doses by Type</dd><dt>2</dt><dd>Field 17 - Fluids and Admin Sets</dd></dl>{:/} | 
| ar_ws_amis_conversion_number | 302 | Ar/ws Amis Conversion Number | {::nomarkdown}This number reflects the number of doses/units contained in the dispensed<br/>drug for Automatic Replenishment/Ward Stock AMIS statistics.<br/>For example:  For a 20cc vial, the quantity dispensed is 1, and<br/>              the conversion number is 20.<br/>              For 5 oz. antacid, the quantity dispensed is 1, and<br/>              the conversion number is 1.<br/>              For a bottle of 100 aspirin, the quantity dispensed is 1,<br/>              and the conversion number is 100.{:/} | NUMERIC |  |  |  | 
| service_code | 400 | Service Code | {::nomarkdown}The Charge Description Master (CDM) Change Control board assigns value<br/>for this field. The value should be a number between 600001-699999. {:/} | NUMERIC |  |  |  | 
| ifcap_item_number | 441 | Ifcap Item Number | {::nomarkdown}To provide a direct link between the DRUG file and the ITEM MASTER file.{:/} | [POINTER] |  |  | {id:Item_Master-441} | 
| old_names | 900 | Old Names |  | [OBJECT] |  |  | [Old_Names-50_01](#Old_Names-50_01)  | 
| strength | 901 | Strength | {::nomarkdown}This field is a numeric value representing the single dose of medication<br/>supplied by this product.{:/} | NUMERIC |  |  |  | 
| unit | 902 | Unit | {::nomarkdown}Unit of measure. Pointer to the Drug Units File #50.607.{:/} | POINTER |  |  | Drug_Units-50_607 | 
| possible_dosages | 903 | Possible Dosages | {::nomarkdown}This multiple contains the dispense units per dose, dose and package<br/>fields. Possible Dosages can be created only for drugs that meet the<br/>specified criteria based on the VA Product File match. Possible Dosages<br/>are numeric. If a drug cannot have Possible Dosages based on the criteria<br/>not being met, then Local Possible Dosages should be created for the drug.{:/} | [OBJECT] |  |  | [Possible_Dosages-50_0903](#Possible_Dosages-50_0903)  | 
| local_possible_dosage | 904 | Local Possible Dosage | {::nomarkdown}This multiple contains the local possible dose and package. If a drug does<br/>not have Possible Dosages because it does not meet the specified criteria<br/>based on the VA Product File match, then Local Possible Dosages should be<br/>created.{:/} | [OBJECT] |  |  | [Local_Possible_Dosage-50_0904](#Local_Possible_Dosage-50_0904)  | 
| corresponding_inpatient_drug | 905 | Corresponding Inpatient Drug | {::nomarkdown}This field will be used when transferring orders from Outpatient Pharmacy<br/>to Inpatient Medications. Only drugs marked for Inpatient Medications can<br/>be selected.{:/} | POINTER |  |  | [Drug-50](Drug-50.md) | 
| opai | 906 | Opai | {::nomarkdown}This multiple contains the automated dispensing devices associated with a <br/>division for this drug.{:/} | [OBJECT] |  |  | [Opai-50_0906](#Opai-50_0906)  | 
| lab_test_monitor-623002 | 623002 | *lab Test Monitor | {::nomarkdown}This is the lab test results of which should be checked before<br/>this drug is dispensed.{:/} | POINTER |  |  |  | 
| monitor_max_days-623003 | 623003 | *monitor Max Days | {::nomarkdown}This is the number of days during which the results of the lab<br/>tests are of interest when dispensing this drug.{:/} | NUMERIC |  |  |  | 
| specimen_type-623004 | 623004 | *specimen Type | {::nomarkdown}This is the specimen type on which the lab test should be run.{:/} | POINTER |  |  |  | 
| monitor_routine-623008 | 623008 | *monitor Routine | {::nomarkdown}This is the name of the routine which is called to do all necessary<br/>checking on lab test results before dispensing this drug.{:/} | STRING |  |  |  | 

## <a name="Synonym-50_1"></a>Synonym-50_1 

 property | value 
--- | --- 
 id | Synonym-50_1
 label | Synonym

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| synonym | .01 | Synonym | {::nomarkdown}This field is used as a quick code for look ups or to locate<br/>NDCs so the drug's inventory can be incremented when orders <br/>are received.<br/> <br/>Entries in this field will be restricted.  These restrictions will:<br/>   - Prohibit any entry that is all numeric and less than 6 characters.<br/>   - Convert any entry which matches the NDC-Expiration Date provided by<br/>     the Robot Rx software. The input transform will strip the leading \3\<br/>     and the expiration date from the barcoded NDC.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| intended_use | 1 | Intended Use | {::nomarkdown}If you designate a synonym as a quick code, then it will not appear on the<br/>formulary listing for distribution in the hospital.  If it is designated as<br/>a trade name, then it will appear on the listing.  This field does not<br/>affect the ability to look-up a drug by quick code or trade name.<br/> <br/>If the intended use is for Controlled Substances or Drug Accountability,<br/>the synonym is used to locate NDCs so the drug's inventory can be <br/>incremented when orders are received.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>D</dt><dd>DRUG ACCOUNTABILITY</dd><dt>0</dt><dd>TRADE NAME</dd><dt>C</dt><dd>CONTROLLED SUBSTANCES</dd><dt>1</dt><dd>QUICK CODE</dd></dl>{:/} | 
| ndc_code | 2 | Ndc Code | {::nomarkdown}This field will contain the national drug code.{:/} | STRING |  |  |  | 
| vsn | 400 | Vsn | {::nomarkdown}This is the vendor's stock number for the NDC.{:/} | STRING |  | INDEXED |  | 
| order_unit | 401 | Order Unit | {::nomarkdown}This is the NDC's unit of order.{:/} | POINTER |  |  | Order_Unit-51_5 | 
| price_per_order_unit | 402 | Price Per Order Unit | {::nomarkdown}This is the price for one unit of order.{:/} | NUMERIC |  |  |  | 
| dispense_units_per_order_unit | 403 | Dispense Units Per Order Unit | {::nomarkdown}This is the number of dispense units in one order unit.{:/} | NUMERIC |  |  |  | 
| price_per_dispense_unit | 404 | Price Per Dispense Unit | {::nomarkdown}This is the cost of one dispense unit.{:/} | NUMERIC |  |  |  | 
| vendor | 405 | Vendor | {::nomarkdown}This is the name of the vendor from which the drug was purchased.{:/} | STRING |  |  |  | 

## <a name="Clozapine_Lab_Test-50_02"></a>Clozapine_Lab_Test-50_02 

 property | value 
--- | --- 
 id | Clozapine_Lab_Test-50_02
 label | Clozapine Lab Test

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| lab_test_monitor | .01 | Lab Test Monitor | {::nomarkdown}This field is used to hold the lab test for Clozapine medication dispensing.{:/} | POINTER |  | REQUIRED | Laboratory_Test-60 | 
| monitor_max_days | 1 | Monitor Max Days | {::nomarkdown}This field is the number of days in the past to go to check for lab values.{:/} | NUMERIC |  |  |  | 
| specimen_type | 2 | Specimen Type | {::nomarkdown}This is the specimen type used for Clozapine dispensing.{:/} | POINTER |  |  | Topography_Field-61 | 
| type_of_test | 3 | Type Of Test | {::nomarkdown}This set of codes will be used to determine which test is being entered.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>WBC</dd><dt>2</dt><dd>ANC</dd></dl>{:/} | 

## <a name="Ndc_By_Outpatient_Site-50_032"></a>Ndc_By_Outpatient_Site-50_032 

 property | value 
--- | --- 
 id | Ndc_By_Outpatient_Site-50_032
 label | Ndc By Outpatient Site

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| outpatient_site | .01 | Outpatient Site |  | POINTER |  | REQUIRED, INDEXED | Outpatient_Site-59 | 
| last_local_ndc | 1 | Last Local Ndc | {::nomarkdown}This field contains the last NDC number dispensed from a window fill<br/>for this drug by a specific Division. It is used to present a default<br/>NDC number to the  finishing pharmacist.  They may use this number or<br/>enter a different one  based on the NDC number on the bottle they are<br/>filling the prescription.{:/} | STRING |  |  |  | 
| last_cmop_ndc | 2 | Last Cmop Ndc | {::nomarkdown}This field contains the last NDC number dispensed by a CMOP Center for<br/>this drug for a specific division. It is to as a default NDC Number for<br/>the next CMOP prescription for the same drug and division. {:/} | STRING |  |  |  | 

## <a name="Atc_Canister-50_0212"></a>Atc_Canister-50_0212 

 property | value 
--- | --- 
 id | Atc_Canister-50_0212
 label | Atc Canister

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| ward_group_for_atc_canister | .01 | Ward Group For Atc Canister | {::nomarkdown}  This is a ward group that has pick lists for this drug to be sent to the<br/>ATC dispensing machine.{:/} | POINTER |  | REQUIRED, INDEXED | Ward_Group-57_5 | 
| atc_canister | 1 | Atc Canister | {::nomarkdown}  This should be the number of the canister from the Baxter ATC <br/>dispensing machine that contains this drug.  If no number is entered <br/>here, the Unit Dose package will assume that this drug is NOT currently <br/>in the ATC.{:/} | NUMERIC |  |  |  | 

## <a name="Activity_Log-50_0214"></a>Activity_Log-50_0214 

 property | value 
--- | --- 
 id | Activity_Log-50_0214
 label | Activity Log

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| activity_log | .01 | Activity Log | {::nomarkdown}Date the activity occurred.<br/> {:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| reason | 1 | Reason | {::nomarkdown}The activity responsible for this entry.<br/> {:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>E</dt><dd>EDIT</dd></dl>{:/} | 
| initiator_of_activity | 2 | Initiator Of Activity | {::nomarkdown}Pointer to the New Person file. The person initiating this activity.<br/> {:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| field_edited | 3 | Field Edited | {::nomarkdown}The free text name of the field that is being edited.<br/> {:/} | STRING |  |  |  | 
| new_value | 4 | New Value | {::nomarkdown}The new value of the field being edited.<br/> {:/} | STRING |  |  |  | 
| ndf_update | 5 | Ndf Update | {::nomarkdown}This field will be set to the text 'NDF Update' if this change was made<br/>by an NDF Data Update patch.{:/} | STRING |  |  |  | 

## <a name="Old_Names-50_01"></a>Old_Names-50_01 

 property | value 
--- | --- 
 id | Old_Names-50_01
 label | Old Names

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| old_names | .01 | Old Names |  | STRING |  | REQUIRED |  | 
| date_changed | .02 | Date Changed |  | DATE-TIME |  | REQUIRED |  | 

## <a name="Possible_Dosages-50_0903"></a>Possible_Dosages-50_0903 

 property | value 
--- | --- 
 id | Possible_Dosages-50_0903
 label | Possible Dosages

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| dispense_units_per_dose | .01 | Dispense Units Per Dose | {::nomarkdown}This numeric entry shall be used with the strength to compute the dose.<br/>Only drugs that meet the specified criteria based on the VA Product File<br/>match can have Possible Dosages.{:/} | NUMERIC |  | REQUIRED, INDEXED |  | 
| dose | 1 | Dose | {::nomarkdown}The value in this field shall be computed by multiplying the Dispense Units<br/>Per Dose by the Strength.{:/} | NUMERIC |  |  |  | 
| package | 2 | Package | {::nomarkdown}This field will allow a dose to be marked for Inpatient Medications and/or<br/>Outpatient Pharmacy package use. It will allow a package to be marked only<br/>if the combination of Dose Form and Unit from the National Drug File<br/>match is marked as convertible in the Dosage Form (#50.606) file.{:/} | STRING |  |  |  | 
| bcma_units_per_dose | 3 | Bcma Units Per Dose | {::nomarkdown}This field represents the BCMA UNITS PER DOSE, which is associated with<br/>the Dosage for Inpatient Medication orders. This field will be used to<br/>populate the Units Per Dose field that designates the number of Dispense<br/>Drug units required to deliver a needed Dosage through the BCMA<br/>application.{:/} | NUMERIC |  |  |  | 

## <a name="Local_Possible_Dosage-50_0904"></a>Local_Possible_Dosage-50_0904 

 property | value 
--- | --- 
 id | Local_Possible_Dosage-50_0904
 label | Local Possible Dosage

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| local_possible_dosage | .01 | Local Possible Dosage | {::nomarkdown}This field represents the Dosage selections that will display in CPRS<br/>for this drug when the Pharmacy Orderable Item that this drug is matched<br/>to is selected. These dosages will be presented for selection only if<br/>there are no Possible Dosages available for the Pharmacy type of order<br/>being entered. Local Possible Dosages should be created when a drug does<br/>not have any Possible Dosages. The Possible Dosages can only be created<br/>when the VA Product File match of the drug meet specified criteria.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| package | 1 | Package | {::nomarkdown}This field will allow a dose to be marked for Inpatient Medications and/or<br/>Outpatient Pharmacy package use.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>I</dt><dd>Inpatient</dd><dt>O</dt><dd>Outpatient</dd><dt>OI</dt><dd>Both</dd></dl>{:/} | 
| bcma_units_per_dose | 2 | Bcma Units Per Dose | {::nomarkdown}This field represents the BCMA UNITS PER DOSE, which is associated with<br/>the Dosage for Inpatient Medication orders. This field will be used to<br/>populate the Units Per Dose field that designates the number of Dispense<br/>Drug units required to deliver a needed Dosage through the BCMA<br/>application.{:/} | NUMERIC |  |  |  | 
| other_language_dosage_name | 3 | Other Language Dosage Name | {::nomarkdown}This field is used to store local possible dosage in another language.{:/} | STRING |  |  |  | 
| dose_unit | 4 | Dose Unit | {::nomarkdown}This is the Dose Unit for this Local Possible Dosage. If this Local <br/>Possible Dosage is used for a medication order, the dosage check will<br/>be performed using this Dose Unit, along with the Numeric Dose<br/>associated with this Local Possible Dosage.{:/} | POINTER |  |  | Dose_Units-51_24 | 
| numeric_dose | 5 | Numeric Dose | {::nomarkdown}This is the Numeric Dose for this Local Possible Dosage. If this Local <br/>Possible Dosage is used for a medication order, the dosage check will <br/>be performed using this Numeric Dose, along with the Dose Unit<br/>associated with this Local Possible Dosage.{:/} | NUMERIC |  |  |  | 

## <a name="Opai-50_0906"></a>Opai-50_0906 

 property | value 
--- | --- 
 id | Opai-50_0906
 label | Opai

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| division | .01 | Division | {::nomarkdown}This is the division associated with the automated dispensing device for<br/>this drug.{:/} | POINTER |  | REQUIRED, INDEXED | Outpatient_Site-59 | 
| window_dns_name | 1 | Window Dns Name | {::nomarkdown}This is the name of the automated dispensing device associated with this <br/>site. Orders with a window route will be sent to this ADD.{:/} | POINTER |  |  | Pharmacy_Automated_Dispensing_Devices-52_53 | 
| mail_dns_name | 2 | Mail Dns Name | {::nomarkdown}This is the name of the automated dispensing device associated with this <br/>site. Orders with a mail route will be sent to this ADD.{:/} | POINTER |  |  | Pharmacy_Automated_Dispensing_Devices-52_53 | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 9:52:13 pm</p>{:/}