---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Institution-4<br/>
<a name="top"></a>
# Institution (4)
This file contains a listing of VA institutions.  It is cross-referenced by name and station number.  The Number field is no longer meaningful (it had previously referenced the station number).

**Global:** ^DIC(4,

**Domain:** Problems

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the name of the institution with out modifiers like state<br/>or type. | STRING | INDEXED<br/>REQUIRED | 
**State**{::nomarkdown}<pre><code>  state</code></pre>{:/} | .02 | State that the institution is physically located. | POINTER |  | State-5
**District**{::nomarkdown}<pre><code>  district</code></pre>{:/} | .03 | This is the Medical District of the Institution file.  Therefore it is not<br/>to be changed except by appropriately knowledgeable individuals. | NUMERIC |  | 
**Short Name**{::nomarkdown}<pre><code>  short_name</code></pre>{:/} | .05 | Short version of name. | STRING |  | 
**VA Type Code**{::nomarkdown}<pre><code>  va_type_code</code></pre>{:/} | .06 | This field is being replaced by the Facitily type field. | ENUMERATION |  | {::nomarkdown}NH: <em><strong>NH</strong></em><br/>PROTH: <em><strong>PC</strong></em><br/>MC,DOM,NH: <em><strong>MCDMNH</strong></em><br/>DOM: <em><strong>DM</strong></em><br/>MC&DOM: <em><strong>MCDM</strong></em><br/>OC-SUB: <em><strong>OS</strong></em><br/>OC-IND: <em><strong>OI</strong></em><br/>MC&RO: <em><strong>MCRO</strong></em><br/>RO&DPC: <em><strong>RODP</strong></em><br/>VACO-RO: <em><strong>CR</strong></em><br/>OC-UNDER MMT: <em><strong>OM</strong></em><br/>RPC: <em><strong>RP</strong></em><br/>DPC: <em><strong>DP</strong></em><br/>VACO: <em><strong>CO</strong></em><br/>HOSP: <em><strong>MC</strong></em><br/>RO: <em><strong>RO</strong></em><br/>PDC: <em><strong>PD</strong></em><br/>MC&NH: <em><strong>MCNH</strong></em>{:/}
**Region**{::nomarkdown}<pre><code>  region</code></pre>{:/} | .07 | VA region number. | NUMERIC |  | 
**Street Addr. 1**{::nomarkdown}<pre><code>  street_addr_1</code></pre>{:/} | 1.01 | First line of the street address (physical) of the facility. | STRING |  | 
**Street Addr. 2**{::nomarkdown}<pre><code>  street_addr_2</code></pre>{:/} | 1.02 | Second line of street address (physical) of the facility. | STRING |  | 
**City**{::nomarkdown}<pre><code>  city</code></pre>{:/} | 1.03 | The city the facility is physically located. | STRING |  | 
**ZIP**{::nomarkdown}<pre><code>  zip</code></pre>{:/} | 1.04 | Postal ZIP code for the physical address of the facility. | STRING |  | 
**Contact**{::nomarkdown}<pre><code>  contact</code></pre>{:/} | 4 | List of contacts. | OBJECT |  | [Contact-4_03](#Contact-4_03)
**St. Addr. 1 (mailing)**{::nomarkdown}<pre><code>  st_addr_1_mailing</code></pre>{:/} | 4.01 | First line of the street address (mailing) of the facility. | STRING |  | 
**St. Addr. 2 (mailing)**{::nomarkdown}<pre><code>  st_addr_2_mailing</code></pre>{:/} | 4.02 | Second line of the street address (mailing) of the facility. | STRING |  | 
**City (mailing)**{::nomarkdown}<pre><code>  city_mailing</code></pre>{:/} | 4.03 | The City of the facility's mailing address. | STRING |  | 
**State (mailing)**{::nomarkdown}<pre><code>  state_mailing</code></pre>{:/} | 4.04 | The State of the facility's mailing address. | POINTER |  | State-5
**ZIP (mailing)**{::nomarkdown}<pre><code>  zip_mailing</code></pre>{:/} | 4.05 | Postal ZIP code for the mailing address of the facility. | STRING |  | 
**Multi-division Facility**{::nomarkdown}<pre><code>  multidivision_facility</code></pre>{:/} | 5 | Flag to indicate this is a multi-division facility. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | 11 | An Institution has a STATUS (#11) of either LOCAL or NATIONAL.<br/><br/>Inactive facilities are flagged as such by the field INACTIVE<br/>FACILITY FLAG (#101).<br/><br/>National entries are facilities that have a STATION NUMBER (#99)<br/>approved by Information Management Service (045A4).  National<br/>entries are maintained by the Master File Server located on FORUM.<br/><br/>Local entries are facilities that are entered locally.  Local<br/>entries no not have a STATION NUMBER (#99).  (Only offically<br/>approved station numbers are allowed in the STATION NUMBER (#99)<br/>field.)<br/><br/>All national entries will have a STATUS (#11) of NATIONAL.  Do<br/>not edit the STATUS (#11) of a national entry.  Do not set a LOCAL<br/>entry to a STATUS (#11) of NATIONAL. | ENUMERATION | INDEXED<br/>REQUIRED | {::nomarkdown}National: <em><strong>N</strong></em><br/>Local: <em><strong>L</strong></em>{:/}
**Facility Type**{::nomarkdown}<pre><code>  facility_type</code></pre>{:/} | 13 | The type of facility. A replacement for the type field. | POINTER |  | Facility_Type-4_1
**Associations**{::nomarkdown}<pre><code>  associations</code></pre>{:/} | 14 |  | OBJECT |  | [Associations-4_014](#Associations-4_014)
**Npi**{::nomarkdown}<pre><code>  npi</code></pre>{:/} | 41.99 | Current Unique National Provider ID. A unique meaningless integer assigned<br/>to providers. | STRING | INDEXED<br/>REQUIRED | 
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | 42 |  | OBJECT |  | [Effective_Date_time-4_042](#Effective_Date_time-4_042)
**Taxonomy Code**{::nomarkdown}<pre><code>  taxonomy_code</code></pre>{:/} | 43 |  | OBJECT |  | [Taxonomy_Code-4_043](#Taxonomy_Code-4_043)
**Acos Hospital Id**{::nomarkdown}<pre><code>  acos_hospital_id</code></pre>{:/} | 51 | This field holds the six-digit code assigned to this facility by<br/>the American College of Surgeons (ACOS) Commission on Cancer, the<br/>organization that accredits a hospital's Cancer Program and Tumor<br/>Registry.  A facility will only have an ACOS number if they have<br/>requested a Cancer Program survey from the ACOS (not all facilities<br/>will have a number). | STRING |  | 
**Facility Dea Number**{::nomarkdown}<pre><code>  facility_dea_number</code></pre>{:/} | 52 | This field holds the facility DEA number. This allows house officers who <br/>do not have their own DEA # to use a VA # for Digital Signatures. | STRING |  | 
**Facility Dea Expiration Date**{::nomarkdown}<pre><code>  facility_dea_expiration_date</code></pre>{:/} | 52.1 | This field contains the expiration date for DEA#. | DATE-TIME |  | 
**Domain**{::nomarkdown}<pre><code>  domain</code></pre>{:/} | 60 | A pointer to the domain so the institution can be linked to a E-mail domain. | POINTER |  | [Domain-4_2](Domain-4_2)
**Agency Code**{::nomarkdown}<pre><code>  agency_code</code></pre>{:/} | 95 | A code to identify the Government agency that this site belongs to.<br/>This is a duplicate of the POINTER TO AGENCY field. | ENUMERATION |  | {::nomarkdown}VA: <em><strong>V</strong></em><br/>EHR: <em><strong>E</strong></em><br/>ARMY: <em><strong>ARMY</strong></em><br/>IHS: <em><strong>I</strong></em><br/>AIR FORCE: <em><strong>AF</strong></em><br/>OTHER: <em><strong>O</strong></em><br/>NAVY: <em><strong>N</strong></em><br/>COAST GUARD: <em><strong>USCG</strong></em>{:/}
**Reporting Station**{::nomarkdown}<pre><code>  reporting_station</code></pre>{:/} | 96 | This is a pointer back to the Institution file that indicates the<br/>site that does the reporting to VACO. | POINTER |  | [Institution-4](Institution-4)
**Pointer To Agency**{::nomarkdown}<pre><code>  pointer_to_agency</code></pre>{:/} | 97 | A pointer to a file that identifies the government agency that<br/>this site belongs to.  Keep in sync with the Agency code field. | POINTER | REQUIRED | Agency-4_11
**Station Number**{::nomarkdown}<pre><code>  station_number</code></pre>{:/} | 99 | This is the 3 digit station number plus any modifiers. | STRING |  | 
**Official VA Name**{::nomarkdown}<pre><code>  official_va_name</code></pre>{:/} | 100 | This field holds the Offical VA name for this VA facility.<br/>The value in this field should not be changed by the site. | STRING | INDEXED | 
**Inactive Facility Flag**{::nomarkdown}<pre><code>  inactive_facility_flag</code></pre>{:/} | 101 |  | ENUMERATION |  | {::nomarkdown}INACTIVE: <em><strong>1</strong></em>{:/}
**Billing Facility Name**{::nomarkdown}<pre><code>  billing_facility_name</code></pre>{:/} | 200 | This field is the billing facility name populated with the<br/>GOLD STANDARD NAME provided by the CBO and required for<br/>pharmacies, CBOC's, VAMC's, etc - Anything that could be identified <br/>as a Billing Facility (Billing Provider) for billing in VistA.<br/> <br/>This new field is not editable locally (same as the .01 and 100 <br/>fields).  Updates would be managed through Forum and the Master File <br/>Update mechanisms only.   | STRING |  | 
**Current Location**{::nomarkdown}<pre><code>  current_location</code></pre>{:/} | 720 | This field flags entries for use in the Event Capture software.<br/>  <br/>       '1'  for   'YES'   (ACTIVE)<br/>  <br/>       '0'  for   'NO'    (INACTIVE) | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**History**{::nomarkdown}<pre><code>  history</code></pre>{:/} | 999.1 |  | OBJECT |  | [History-4_999](#History-4_999)
**Identifier**{::nomarkdown}<pre><code>  identifier</code></pre>{:/} | 9999 |  | OBJECT |  | [Identifier-4_9999](#Identifier-4_9999)

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Contact-4_03"></a>Contact (4.03)

<dl>
<dt>ID</dt><dd>Contact-4_03</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Contact**{::nomarkdown}<pre><code>  contact</code></pre>{:/} | .01 | The name of a contact at the site. | STRING | REQUIRED | 
**Area**{::nomarkdown}<pre><code>  area</code></pre>{:/} | .02 | Pointer to the part of the site the contact works in. | POINTER |  | [Hospital_Location-44](Hospital_Location-44)
**Phone #**{::nomarkdown}<pre><code>  phone_number</code></pre>{:/} | .03 | Telephone number. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Associations-4_014"></a>Associations (4.014)

<dl>
<dt>ID</dt><dd>Associations-4_014</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Associations**{::nomarkdown}<pre><code>  associations</code></pre>{:/} | .01 | This multiple field is used to link groups if Institutions into<br/>associations. | POINTER | INDEXED<br/>REQUIRED | [Institution_Association_Types-4_05](Institution_Association_Types-4_05)
**Parent Of Association**{::nomarkdown}<pre><code>  parent_of_association</code></pre>{:/} | 1 | This field points back to the Institution file to indicate the<br/>parent of the association. | POINTER |  | [Institution-4](Institution-4)

[&uarr; Return to top](#top)<br/>


### <a name="Effective_Date_time-4_042"></a>Effective Date/time (4.042)

<dl>
<dt>ID</dt><dd>Effective_Date_time-4_042</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | .01 | This field contains the date and time of the last change to the NPI field. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | .02 | The Status of an NPI is either 'ACTIVE' or 'INACTIVE'. I 'ACTIVE' then <br/>the NPI will be accessible by end-users to document a particular provider.<br/>If 'INACTIVE', then the NPI will only be accessible by the application to<br/>display legacy data. | ENUMERATION | REQUIRED | {::nomarkdown}ACTIVE: <em><strong>1</strong></em><br/>INACTIVE: <em><strong>0</strong></em>{:/}
**Npi**{::nomarkdown}<pre><code>  npi</code></pre>{:/} | .03 | Unique National Provider ID. A unique meaningless integer assigned to<br/>providers.  | STRING | INDEXED<br/>REQUIRED | 

[&uarr; Return to top](#top)<br/>


### <a name="Taxonomy_Code-4_043"></a>Taxonomy Code (4.043)

<dl>
<dt>ID</dt><dd>Taxonomy_Code-4_043</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Taxonomy Code**{::nomarkdown}<pre><code>  taxonomy_code</code></pre>{:/} | .01 | This multiple field holds the NUCC recognized taxonomy code for an<br/>individual or an organization. | POINTER | INDEXED<br/>REQUIRED | [Person_Class-8932_1](Person_Class-8932_1)
**Primary Code**{::nomarkdown}<pre><code>  primary_code</code></pre>{:/} | .02 | Only one code can be the primary taxonomy code for a provider. When a <br/>specific taxonomy code is identified it is the primary code that will be <br/>the default. | BOOLEAN | INDEXED | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | .03 | If a taxonomy code listed for a provider is a currently active code (one <br/>they use today), then the status should be marked with an 'A'. At times a<br/>provider will no longer use a taxonomy code. This code will be marked with<br/>an 'I' for inactive. Codes should not be removed from a provider's list.<br/>They should be activated or inactivated. | ENUMERATION |  | {::nomarkdown}ACTIVE: <em><strong>A</strong></em><br/>INACTIVE: <em><strong>I</strong></em>{:/}

[&uarr; Return to top](#top)<br/>


### <a name="History-4_999"></a>History (4.999)

<dl>
<dt>ID</dt><dd>History-4_999</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Effective Date**{::nomarkdown}<pre><code>  effective_date</code></pre>{:/} | .01 |  | DATE-TIME | INDEXED<br/>REQUIRED | 
**Name (changed From)**{::nomarkdown}<pre><code>  name_changed_from</code></pre>{:/} | .02 |  | STRING | INDEXED | 
**Offical VA Name (changed From)**{::nomarkdown}<pre><code>  offical_va_name_changed_from</code></pre>{:/} | .03 |  | STRING |  | 
**Realigned To**{::nomarkdown}<pre><code>  realigned_to</code></pre>{:/} | .05 |  | POINTER | INDEXED | [Institution-4](Institution-4)
**Realigned From**{::nomarkdown}<pre><code>  realigned_from</code></pre>{:/} | .06 |  | POINTER | INDEXED | [Institution-4](Institution-4)
**Deactivated Facility / Sta #**{::nomarkdown}<pre><code>  deactivated_facility___sta_number</code></pre>{:/} | .07 |  | ENUMERATION |  | {::nomarkdown}DEACTIVATED: <em><strong>1</strong></em>{:/}
**Activated Facility**{::nomarkdown}<pre><code>  activated_facility</code></pre>{:/} | .08 |  | ENUMERATION |  | {::nomarkdown}ACTIVATED: <em><strong>1</strong></em>{:/}

[&uarr; Return to top](#top)<br/>


### <a name="Identifier-4_9999"></a>Identifier (4.9999)

<dl>
<dt>ID</dt><dd>Identifier-4_9999</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Coding System**{::nomarkdown}<pre><code>  coding_system</code></pre>{:/} | .01 |  | STRING | INDEXED<br/>REQUIRED | 
**Id**{::nomarkdown}<pre><code>  id-_02</code></pre>{:/} | .02 |  | STRING |  | 
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | .03 | Describes the pair Status and Effective Date/Time for each reference term. | DATE-TIME |  | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | .04 | The Status of a reference term is either 'ACTIVE' or 'INACTIVE', then the <br/>term will be accessible by end-users to document a particular patient <br/>event. If 'INACTIVE', then the term will only be accessible by the <br/>application to display legacy data. | ENUMERATION |  | {::nomarkdown}ACTIVE: <em><strong>1</strong></em><br/>INACTIVE: <em><strong>0</strong></em>{:/}

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}