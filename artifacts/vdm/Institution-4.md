---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Institution-4 

 property | value 
--- | --- 
 id | Institution-4
 fmId | 4
 label | Institution
 location | ^DIC(4,
 description | {::nomarkdown}This file contains a listing of VA institutions.  It is cross-referenced<br/>by name and station number.  The Number field is no longer meaningful (it<br/>had previously referenced the station number).{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is the name of the institution with out modifiers like state<br/>or type.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| state | .02 | State | {::nomarkdown}State that the institution is physically located.{:/} | POINTER |  |  | State-5 | 
| district | .03 | District | {::nomarkdown}This is the Medical District of the Institution file.  Therefore it is not<br/>to be changed except by appropriately knowledgeable individuals.{:/} | NUMERIC |  |  |  | 
| short_name | .05 | Short Name | {::nomarkdown}Short version of name.{:/} | STRING |  |  |  | 
| va_type_code | .06 | VA Type Code | {::nomarkdown}This field is being replaced by the Facitily type field.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>NH</dt><dd>NH</dd><dt>PC</dt><dd>PROTH</dd><dt>MCDMNH</dt><dd>MC,DOM,NH</dd><dt>DM</dt><dd>DOM</dd><dt>MCDM</dt><dd>MC&DOM</dd><dt>OS</dt><dd>OC-SUB</dd><dt>OI</dt><dd>OC-IND</dd><dt>MCRO</dt><dd>MC&RO</dd><dt>RODP</dt><dd>RO&DPC</dd><dt>CR</dt><dd>VACO-RO</dd><dt>OM</dt><dd>OC-UNDER MMT</dd><dt>RP</dt><dd>RPC</dd><dt>DP</dt><dd>DPC</dd><dt>CO</dt><dd>VACO</dd><dt>MC</dt><dd>HOSP</dd><dt>RO</dt><dd>RO</dd><dt>PD</dt><dd>PDC</dd><dt>MCNH</dt><dd>MC&NH</dd></dl>{:/} | 
| region | .07 | Region | {::nomarkdown}VA region number.{:/} | NUMERIC |  |  |  | 
| street_addr_1 | 1.01 | Street Addr. 1 | {::nomarkdown}First line of the street address (physical) of the facility.{:/} | STRING |  |  |  | 
| street_addr_2 | 1.02 | Street Addr. 2 | {::nomarkdown}Second line of street address (physical) of the facility.{:/} | STRING |  |  |  | 
| city | 1.03 | City | {::nomarkdown}The city the facility is physically located.{:/} | STRING |  |  |  | 
| zip | 1.04 | ZIP | {::nomarkdown}Postal ZIP code for the physical address of the facility.{:/} | STRING |  |  |  | 
| contact | 4 | Contact | {::nomarkdown}List of contacts.{:/} | [OBJECT] |  |  | [Contact-4_03](#Contact-4_03)  | 
| st_addr_1_mailing | 4.01 | St. Addr. 1 (mailing) | {::nomarkdown}First line of the street address (mailing) of the facility.{:/} | STRING |  |  |  | 
| st_addr_2_mailing | 4.02 | St. Addr. 2 (mailing) | {::nomarkdown}Second line of the street address (mailing) of the facility.{:/} | STRING |  |  |  | 
| city_mailing | 4.03 | City (mailing) | {::nomarkdown}The City of the facility's mailing address.{:/} | STRING |  |  |  | 
| state_mailing | 4.04 | State (mailing) | {::nomarkdown}The State of the facility's mailing address.{:/} | POINTER |  |  | State-5 | 
| zip_mailing | 4.05 | ZIP (mailing) | {::nomarkdown}Postal ZIP code for the mailing address of the facility.{:/} | STRING |  |  |  | 
| multidivision_facility | 5 | Multi-division Facility | {::nomarkdown}Flag to indicate this is a multi-division facility.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| status | 11 | Status | {::nomarkdown}An Institution has a STATUS (#11) of either LOCAL or NATIONAL.<br/><br/>Inactive facilities are flagged as such by the field INACTIVE<br/>FACILITY FLAG (#101).<br/><br/>National entries are facilities that have a STATION NUMBER (#99)<br/>approved by Information Management Service (045A4).  National<br/>entries are maintained by the Master File Server located on FORUM.<br/><br/>Local entries are facilities that are entered locally.  Local<br/>entries no not have a STATION NUMBER (#99).  (Only offically<br/>approved station numbers are allowed in the STATION NUMBER (#99)<br/>field.)<br/><br/>All national entries will have a STATUS (#11) of NATIONAL.  Do<br/>not edit the STATUS (#11) of a national entry.  Do not set a LOCAL<br/>entry to a STATUS (#11) of NATIONAL.{:/} | ENUMERATION |  | REQUIRED, INDEXED | {::nomarkdown}<dl><dt>N</dt><dd>National</dd><dt>L</dt><dd>Local</dd></dl>{:/} | 
| facility_type | 13 | Facility Type | {::nomarkdown}The type of facility. A replacement for the type field.{:/} | POINTER |  |  | Facility_Type-4_1 | 
| associations | 14 | Associations |  | [OBJECT] |  |  | [Associations-4_014](#Associations-4_014)  | 
| npi | 41.99 | Npi | {::nomarkdown}Current Unique National Provider ID. A unique meaningless integer assigned<br/>to providers.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| effective_date_time | 42 | Effective Date/time |  | [OBJECT] |  |  | [Effective_Date_time-4_042](#Effective_Date_time-4_042)  | 
| taxonomy_code | 43 | Taxonomy Code |  | [OBJECT] |  |  | [Taxonomy_Code-4_043](#Taxonomy_Code-4_043)  | 
| acos_hospital_id | 51 | Acos Hospital Id | {::nomarkdown}This field holds the six-digit code assigned to this facility by<br/>the American College of Surgeons (ACOS) Commission on Cancer, the<br/>organization that accredits a hospital's Cancer Program and Tumor<br/>Registry.  A facility will only have an ACOS number if they have<br/>requested a Cancer Program survey from the ACOS (not all facilities<br/>will have a number).{:/} | STRING |  |  |  | 
| facility_dea_number | 52 | Facility Dea Number | {::nomarkdown}This field holds the facility DEA number. This allows house officers who <br/>do not have their own DEA # to use a VA # for Digital Signatures.{:/} | STRING |  |  |  | 
| facility_dea_expiration_date | 52.1 | Facility Dea Expiration Date | {::nomarkdown}This field contains the expiration date for DEA#.{:/} | DATE-TIME |  |  |  | 
| domain | 60 | Domain | {::nomarkdown}A pointer to the domain so the institution can be linked to a E-mail domain.{:/} | POINTER |  |  | Domain-4_2 | 
| agency_code | 95 | Agency Code | {::nomarkdown}A code to identify the Government agency that this site belongs to.<br/>This is a duplicate of the POINTER TO AGENCY field.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>V</dt><dd>VA</dd><dt>E</dt><dd>EHR</dd><dt>ARMY</dt><dd>ARMY</dd><dt>I</dt><dd>IHS</dd><dt>AF</dt><dd>AIR FORCE</dd><dt>O</dt><dd>OTHER</dd><dt>N</dt><dd>NAVY</dd><dt>USCG</dt><dd>COAST GUARD</dd></dl>{:/} | 
| reporting_station | 96 | Reporting Station | {::nomarkdown}This is a pointer back to the Institution file that indicates the<br/>site that does the reporting to VACO.{:/} | POINTER |  |  | [Institution-4](Institution-4.md) | 
| pointer_to_agency | 97 | Pointer To Agency | {::nomarkdown}A pointer to a file that identifies the government agency that<br/>this site belongs to.  Keep in sync with the Agency code field.{:/} | POINTER |  | REQUIRED | Agency-4_11 | 
| station_number | 99 | Station Number | {::nomarkdown}This is the 3 digit station number plus any modifiers.{:/} | STRING |  |  |  | 
| official_va_name | 100 | Official VA Name | {::nomarkdown}This field holds the Offical VA name for this VA facility.<br/>The value in this field should not be changed by the site.{:/} | STRING |  | INDEXED |  | 
| inactive_facility_flag | 101 | Inactive Facility Flag |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>INACTIVE</dd></dl>{:/} | 
| billing_facility_name | 200 | Billing Facility Name | {::nomarkdown}This field is the billing facility name populated with the<br/>GOLD STANDARD NAME provided by the CBO and required for<br/>pharmacies, CBOC's, VAMC's, etc - Anything that could be identified <br/>as a Billing Facility (Billing Provider) for billing in VistA.<br/> <br/>This new field is not editable locally (same as the .01 and 100 <br/>fields).  Updates would be managed through Forum and the Master File <br/>Update mechanisms only.  {:/} | STRING |  |  |  | 
| current_location | 720 | Current Location | {::nomarkdown}This field flags entries for use in the Event Capture software.<br/>  <br/>       '1'  for   'YES'   (ACTIVE)<br/>  <br/>       '0'  for   'NO'    (INACTIVE){:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| history | 999.1 | History |  | [OBJECT] |  |  | [History-4_999](#History-4_999)  | 
| identifier | 9999 | Identifier |  | [OBJECT] |  |  | [Identifier-4_9999](#Identifier-4_9999)  | 

## <a name="Contact-4_03"></a>Contact-4_03 

 property | value 
--- | --- 
 id | Contact-4_03
 label | Contact

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| contact | .01 | Contact | {::nomarkdown}The name of a contact at the site.{:/} | STRING |  | REQUIRED |  | 
| area | .02 | Area | {::nomarkdown}Pointer to the part of the site the contact works in.{:/} | POINTER |  |  | [Hospital_Location-44](Hospital_Location-44.md) | 
| phone_number | .03 | Phone # | {::nomarkdown}Telephone number.{:/} | STRING |  |  |  | 

## <a name="Associations-4_014"></a>Associations-4_014 

 property | value 
--- | --- 
 id | Associations-4_014
 label | Associations

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| associations | .01 | Associations | {::nomarkdown}This multiple field is used to link groups if Institutions into<br/>associations.{:/} | POINTER |  | REQUIRED, INDEXED | Institution_Association_Types-4_05 | 
| parent_of_association | 1 | Parent Of Association | {::nomarkdown}This field points back to the Institution file to indicate the<br/>parent of the association.{:/} | POINTER |  |  | [Institution-4](Institution-4.md) | 

## <a name="Effective_Date_time-4_042"></a>Effective_Date_time-4_042 

 property | value 
--- | --- 
 id | Effective_Date_time-4_042
 label | Effective Date/time

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| effective_date_time | .01 | Effective Date/time | {::nomarkdown}This field contains the date and time of the last change to the NPI field.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| status | .02 | Status | {::nomarkdown}The Status of an NPI is either 'ACTIVE' or 'INACTIVE'. I 'ACTIVE' then <br/>the NPI will be accessible by end-users to document a particular provider.<br/>If 'INACTIVE', then the NPI will only be accessible by the application to<br/>display legacy data.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 
| npi | .03 | Npi | {::nomarkdown}Unique National Provider ID. A unique meaningless integer assigned to<br/>providers. {:/} | STRING |  | REQUIRED, INDEXED |  | 

## <a name="Taxonomy_Code-4_043"></a>Taxonomy_Code-4_043 

 property | value 
--- | --- 
 id | Taxonomy_Code-4_043
 label | Taxonomy Code

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| taxonomy_code | .01 | Taxonomy Code | {::nomarkdown}This multiple field holds the NUCC recognized taxonomy code for an<br/>individual or an organization.{:/} | POINTER |  | REQUIRED, INDEXED | Person_Class-8932_1 | 
| primary_code | .02 | Primary Code | {::nomarkdown}Only one code can be the primary taxonomy code for a provider. When a <br/>specific taxonomy code is identified it is the primary code that will be <br/>the default.{:/} | BOOLEAN |  | INDEXED | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| status | .03 | Status | {::nomarkdown}If a taxonomy code listed for a provider is a currently active code (one <br/>they use today), then the status should be marked with an 'A'. At times a<br/>provider will no longer use a taxonomy code. This code will be marked with<br/>an 'I' for inactive. Codes should not be removed from a provider's list.<br/>They should be activated or inactivated.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>A</dt><dd>ACTIVE</dd><dt>I</dt><dd>INACTIVE</dd></dl>{:/} | 

## <a name="History-4_999"></a>History-4_999 

 property | value 
--- | --- 
 id | History-4_999
 label | History

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| effective_date | .01 | Effective Date |  | DATE-TIME |  | REQUIRED, INDEXED |  | 
| name_changed_from | .02 | Name (changed From) |  | STRING |  | INDEXED |  | 
| offical_va_name_changed_from | .03 | Offical VA Name (changed From) |  | STRING |  |  |  | 
| realigned_to | .05 | Realigned To |  | POINTER |  | INDEXED | [Institution-4](Institution-4.md) | 
| realigned_from | .06 | Realigned From |  | POINTER |  | INDEXED | [Institution-4](Institution-4.md) | 
| deactivated_facility___sta_number | .07 | Deactivated Facility / Sta # |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>DEACTIVATED</dd></dl>{:/} | 
| activated_facility | .08 | Activated Facility |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVATED</dd></dl>{:/} | 

## <a name="Identifier-4_9999"></a>Identifier-4_9999 

 property | value 
--- | --- 
 id | Identifier-4_9999
 label | Identifier

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| coding_system | .01 | Coding System |  | STRING |  | REQUIRED, INDEXED |  | 
| id-_02 | .02 | Id |  | STRING |  |  |  | 
| effective_date_time | .03 | Effective Date/time | {::nomarkdown}Describes the pair Status and Effective Date/Time for each reference term.{:/} | DATE-TIME |  |  |  | 
| status | .04 | Status | {::nomarkdown}The Status of a reference term is either 'ACTIVE' or 'INACTIVE', then the <br/>term will be accessible by end-users to document a particular patient <br/>event. If 'INACTIVE', then the term will only be accessible by the <br/>application to display legacy data.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 7:54:22 am</p>{:/}