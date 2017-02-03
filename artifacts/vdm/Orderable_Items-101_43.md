---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Orderable_Items-101_43 

<dl>
<dt>id</dt><dd>Orderable_Items-101_43</dd>
<dt>fmId</dt><dd>101.43</dd>
<dt>label</dt><dd>Orderable Items</dd>
<dt>location</dt><dd>^ORD(101.43,</dd>
<dt>description</dt><dd>This file contains the orderable items for use within OE/RR.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is the name of this item that will be used for displaying and searching.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| inactivated | .1 | Inactivated | {::nomarkdown}This is a date and time for inactivating this item.  If this field has a<br/>value, this item will not ba available to select for ordering after this<br/>date.{:/} | DATE-TIME |  |  |  | 
| notify_on_order | .91 | Notify On Order | {::nomarkdown}This field is a flag to determine if a notification should be generated<br/>whenever an order for this item is placed.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| notify_when_resulted | .92 | Notify When Resulted | {::nomarkdown}This field is a flag to determine if a notification should be sent when<br/>results are posted for an order for this item.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| synonyms | 1 | Synonyms | {::nomarkdown}This multiple contains synonyms for this orderable item, used when<br/>searching the file.{:/} | [STRING] |  |  |  | 
| package_name | 1.1 | Package Name | {::nomarkdown}This is the name of this item as defined by the filling service.{:/} | STRING |  | REQUIRED |  | 
| id-2 | 2 | Id | {::nomarkdown}This is a unique identifier for this item, created from the primary key<br/>passed in the Orderable Items update message from each package; it will<br/>be in the form of \package code;99XXX\ where XXX indicates the package<br/>table originating this item (i.e. RAP, LRT, etc).{:/} | STRING |  | REQUIRED, INDEXED |  | 
| code | 3 | Code | {::nomarkdown}This is the code assigned to this item by the authoritative package,<br/>from a national standard coding system such as CPT or SNOMED.{:/} | STRING |  |  |  | 
| coding_system | 4 | Coding System | {::nomarkdown}This is the system used to generate the code assigned in field 3.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>NDF</dt><dd>NATIONAL DRUG FILE</dd><dt>CPT4</dt><dd>CPT4</dd><dt>NLT</dt><dd>NATIONAL LAB TEST FILE</dd></dl>{:/} | 
| display_group | 5 | Display Group | {::nomarkdown}This is the display group that this item is a menber of; this field is<br/>used for a variety of purposes such as narrowing a search for an item,<br/>sorting and grouping orders, and passing the order to the service<br/>for filling.{:/} | POINTER |  |  | Display_Group-100_98 | 
| cost | 6 | Cost | {::nomarkdown}This is the [approximate] cost of filling an order for this item.{:/} | NUMERIC |  |  |  | 
| authorization | 7 | Authorization | {::nomarkdown}This field is used to identify the level of authentication necessary to<br/>release an order for this item; it will be replaced by the Clinical<br/>Authorization and Subscription Utility (CASU) when it becomes available.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>PHYSICIAN</dd><dt>0</dt><dd>NO SIGNATURE REQUIRED</dd><dt>3</dt><dd>SERVICE CHIEF</dd><dt>4</dt><dd>COSIGNATURE</dd><dt>2</dt><dd>SPECIALIST</dd></dl>{:/} | 
| order_message | 8 | Order Message | {::nomarkdown}This field contains text that is to be displayed to the user whenever<br/>this item is selected to be ordered.{:/} | STRING |  |  |  | 
| set_membership | 9 | Set Membership | {::nomarkdown}This field contains the names of sets to which this orderable item belongs.<br/>When a set name is entered here, a cross-reference of the format \S.name\<br/>is created, allowing rapid lookups on this file.{:/} | [OBJECT] |  |  | [Set_Membership-101_439](#Set_Membership-101_439)  | 
| components | 10 | Components | {::nomarkdown}This multiple contains the components of this orderable item, i.e. drug<br/>ingredients or tests in a lab panel.{:/} | [OBJECT] |  |  | [Components-101_431](#Components-101_431)  | 
| inpatient_med | 50.1 | Inpatient Med | {::nomarkdown}This field indicates if this drug is selectable for an inpatient med order.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>2</dt><dd>YES-IV</dd><dt>1</dt><dd>YES</dd><dt>0</dt><dd>NO</dd></dl>{:/} | 
| outpatient_med | 50.2 | Outpatient Med | {::nomarkdown}This field indicates if this drug is selectable for an outpatient med order.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| iv_base | 50.3 | Iv Base | {::nomarkdown}This field indicates if this drug is selectable as a base for an IV Fluid<br/>order.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| iv_additive | 50.4 | Iv Additive | {::nomarkdown}This field indicates if this drug is selectable as an additive for an IV<br/>Fluid order.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| supply | 50.5 | Supply | {::nomarkdown}This field indicates if this item is selectable for a medication supply<br/>order.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| nonformulary | 50.6 | Non-formulary | {::nomarkdown}This field indicates if this item is available in the local formulary.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| nonva_meds | 50.7 | Non-va Meds | {::nomarkdown}This field indicates if this drug is selectable for a non-VA med order.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| specimen | 60.1 | Specimen | {::nomarkdown}This is the specimen to be collected for this test; it is in the 6-piece<br/>HL7 format, where the first 3 pieces are the code, name, and system of<br/>the SNOMED code for this specimen, and the last 3 pieces are similarly<br/>from the local Site/Specimen file.{:/} | STRING |  |  |  | 
| can_lab_collect | 60.2 | Can Lab Collect | {::nomarkdown}This identifies which specimens the lab phlebotomy team can collect.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| sequence | 60.3 | Sequence | {::nomarkdown}This field indicates the order in which specimens are presented for<br/>selection, the first being the most often selected and the default.{:/} | NUMERIC |  |  |  | 
| max_order_frequency | 60.4 | Max Order Frequency | {::nomarkdown}This is used to control how often this item may be ordered within a given<br/>time period.  This item may be ordered only once within the number of days<br/>specified in this field.{:/} | NUMERIC |  |  |  | 
| daily_order_max | 60.5 | Daily Order Max | {::nomarkdown}This is the number of times within a given day that this item may be<br/>ordered.{:/} | NUMERIC |  |  |  | 
| lab_section | 60.6 | Lab Section | {::nomarkdown}This is the lab section to which orders for this test and sample will be<br/>sent.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>BB</dt><dd>BLOOD BANK</dd><dt>EM</dt><dd>ELECTRON MICROSCOPY</dd><dt>SP</dt><dd>SURGICAL PATHOLOGY</dd><dt>CY</dt><dd>CYTOLOGY</dd><dt>MI</dt><dd>MICROBIOLOGY</dd><dt>CH</dt><dd>CHEMISTRY</dd><dt>AU</dt><dd>AUTOPSY</dd></dl>{:/} | 
| type-60_7 | 60.7 | Type | {::nomarkdown}This field indicates if this item may be selected when ordering a lab<br/>test, and/or if it is included in this file for results reporting only.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>I</dt><dd>input</dd><dt>N</dt><dd>neither</dd><dt>B</dt><dd>both</dd><dt>O</dt><dd>output</dd></dl>{:/} | 
| contrast_media | 71.1 | Contrast Media | {::nomarkdown}This field indicates what contrast media, if any, is used by this<br/>radiologic procedure where:<br/> <br/>      I = Ionic Iodinated<br/>      N = Non-ionic Iodinated<br/>      L = Gadolinium<br/>      C = Cholecystographic<br/>      G = Gastrografin<br/>      B = Barium<br/>      M = Unspecified contrast media<br/> <br/>This value may consist of as many of these flags as are appropriate for<br/>this procedure; if empty, no contrast media is assumed.  This field is <br/>used primarily for Order Checking.{:/} | STRING |  |  |  | 
| procedure_type | 71.2 | Procedure Type | {::nomarkdown}This field identifies the procedure type for this orderable item whether<br/>broad or detailed, a series or parent exam.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>D</dt><dd>DETAILED</dd><dt>B</dt><dd>BROAD</dd><dt>P</dt><dd>PARENT</dd><dt>S</dt><dd>SERIES</dd></dl>{:/} | 
| imaging_type | 71.3 | Imaging Type | {::nomarkdown}This is the imaging type of this radiology procedure.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>CARD</dt><dd>CARDIOLOGY STUDIES</dd><dt>ANI</dt><dd>ANGIO/NEURO/INTERVENTIONAL</dd><dt>NM</dt><dd>NUCLEAR MEDICINE</dd><dt>RAD</dt><dd>RADIOLOGY</dd><dt>CT</dt><dd>CT SCAN</dd><dt>US</dt><dd>ULTRASOUND</dd><dt>MRI</dt><dd>MAGNETIC RESONANCE IMAGING</dd><dt>MAM</dt><dd>MAMMOGRAPHY</dd><dt>VAS</dt><dd>VASCULAR LAB</dd></dl>{:/} | 
| common_procedure | 71.4 | Common Procedure | {::nomarkdown}This field indicates that this procedure is commonly ordered from<br/>Radiology, and is an entry in the Radiology Common Procedures file;<br/>the number stored here is the sequence number for display.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| diet_type | 111.1 | Diet Type | {::nomarkdown}This field identifies the diet type associated with this orderable item,<br/>if the order is for a diet modification or a tubefeeding product.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>T</dt><dd>TUBEFEEDING PRODUCT</dd><dt>D</dt><dd>DIET</dd></dl>{:/} | 
| precedence | 111.2 | Precedence | {::nomarkdown}This field is used to avoid conflicting diet modifications; items with<br/>the same precedence number may not be selected together.{:/} | NUMERIC |  |  |  | 
| ask_expiration_date | 111.3 | Ask Expiration Date? | {::nomarkdown}This is a flag that determines if a stop date should be prompted for<br/>when placing an order for this diet.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| service_usage | 123.1 | Service Usage | {::nomarkdown}This field contains the usage of this consult service; a value here<br/>indicates that this service may NOT be selectable for ordering.  Services<br/>with a 1 are used for grouping purposes only, and a 2 indicates that<br/>only service personnel may order or forward consults to this service.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>GROUPER ONLY</dd><dt>2</dt><dd>TRACKING ONLY</dd></dl>{:/} | 
| blood_component | 6001 | Blood Component |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| diagnostic_test | 6002 | Diagnostic Test |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>YES</dd><dt>2</dt><dd>TAS</dd><dt>0</dt><dd>NO</dd></dl>{:/} | 

## <a name="Set_Membership-101_439"></a>Set_Membership-101_439 

<dl>
<dt>id</dt><dd>Set_Membership-101_439</dd>
<dt>label</dt><dd>Set Membership</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| set | .01 | Set | {::nomarkdown}This is the name of a set to which this orderable item belongs.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| qo_only | 2 | Qo Only | {::nomarkdown}This field determines if the item may be ordered via the regular order<br/>dialog for this Set, or only via predefined quick orders.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 

## <a name="Components-101_431"></a>Components-101_431 

<dl>
<dt>id</dt><dd>Components-101_431</dd>
<dt>label</dt><dd>Components</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is the name of a component of this orderable item.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| id-2 | 2 | Id | {::nomarkdown}This is an identifier for this component, created from the 6-piece coded<br/>format passed in the Orderable Items update message from each package.<br/>It should be stored in the form of \package code;99XXX\ where XXX <br/>indicates the package table originating this item (i.e. RAP, LRT, etc.).{:/} | STRING |  | INDEXED |  | 
| code | 3 | Code | {::nomarkdown}This is the code assigned to this item by the authoritative package from a<br/>national standard coding system such as CPT or SNOMED.{:/} | STRING |  |  |  | 
| coding_system | 4 | Coding System | {::nomarkdown}This is the system used to generate the code assigned in field 3.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>NDF</dt><dd>NATIONAL DRUG FILE</dd><dt>CPT4</dt><dd>CPT4</dd><dt>NLT</dt><dd>NATIONAL LAB TEST FILE</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 5:29:32 am</p>{:/}