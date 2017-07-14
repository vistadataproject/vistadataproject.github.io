---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Orderable_Items-101_43<br/>
<a name="top"></a>
# Orderable Items (101.43)
This file contains the orderable items for use within OE/RR.

**Global:** ^ORD(101.43,

**Domain:** Non-Clinical

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the name of this item that will be used for displaying and searching. | STRING | INDEXED<br/>REQUIRED | 
**Inactivated**{::nomarkdown}<pre><code>  inactivated</code></pre>{:/} | .1 | This is a date and time for inactivating this item.  If this field has a<br/>value, this item will not ba available to select for ordering after this<br/>date. | DATE-TIME |  | 
**Notify On Order**{::nomarkdown}<pre><code>  notify_on_order</code></pre>{:/} | .91 | This field is a flag to determine if a notification should be generated<br/>whenever an order for this item is placed. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Notify When Resulted**{::nomarkdown}<pre><code>  notify_when_resulted</code></pre>{:/} | .92 | This field is a flag to determine if a notification should be sent when<br/>results are posted for an order for this item. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Synonyms**{::nomarkdown}<pre><code>  synonyms</code></pre>{:/} | 1 | This multiple contains synonyms for this orderable item, used when<br/>searching the file. | STRING |  | 
**Package Name**{::nomarkdown}<pre><code>  package_name</code></pre>{:/} | 1.1 | This is the name of this item as defined by the filling service. | STRING | REQUIRED | 
**Id**{::nomarkdown}<pre><code>  id-2</code></pre>{:/} | 2 | This is a unique identifier for this item, created from the primary key<br/>passed in the Orderable Items update message from each package; it will<br/>be in the form of "package code;99XXX" where XXX indicates the package<br/>table originating this item (i.e. RAP, LRT, etc). | STRING | INDEXED<br/>REQUIRED | 
**Code**{::nomarkdown}<pre><code>  code</code></pre>{:/} | 3 | This is the code assigned to this item by the authoritative package,<br/>from a national standard coding system such as CPT or SNOMED. | STRING |  | 
**Coding System**{::nomarkdown}<pre><code>  coding_system</code></pre>{:/} | 4 | This is the system used to generate the code assigned in field 3. | ENUMERATION |  | {::nomarkdown}NATIONAL DRUG FILE: <em><strong>NDF</strong></em><br/>CPT4: <em><strong>CPT4</strong></em><br/>NATIONAL LAB TEST FILE: <em><strong>NLT</strong></em>{:/}
**Display Group**{::nomarkdown}<pre><code>  display_group</code></pre>{:/} | 5 | This is the display group that this item is a menber of; this field is<br/>used for a variety of purposes such as narrowing a search for an item,<br/>sorting and grouping orders, and passing the order to the service<br/>for filling. | POINTER |  | [Display_Group-100_98](Display_Group-100_98)
**Cost**{::nomarkdown}<pre><code>  cost</code></pre>{:/} | 6 | This is the [approximate] cost of filling an order for this item. | NUMERIC |  | 
**Authorization**{::nomarkdown}<pre><code>  authorization</code></pre>{:/} | 7 | This field is used to identify the level of authentication necessary to<br/>release an order for this item; it will be replaced by the Clinical<br/>Authorization and Subscription Utility (CASU) when it becomes available. | ENUMERATION |  | {::nomarkdown}PHYSICIAN: <em><strong>1</strong></em><br/>NO SIGNATURE REQUIRED: <em><strong>0</strong></em><br/>SERVICE CHIEF: <em><strong>3</strong></em><br/>COSIGNATURE: <em><strong>4</strong></em><br/>SPECIALIST: <em><strong>2</strong></em>{:/}
**Order Message**{::nomarkdown}<pre><code>  order_message</code></pre>{:/} | 8 | This field contains text that is to be displayed to the user whenever<br/>this item is selected to be ordered. | STRING |  | 
**Set Membership**{::nomarkdown}<pre><code>  set_membership</code></pre>{:/} | 9 | This field contains the names of sets to which this orderable item belongs.<br/>When a set name is entered here, a cross-reference of the format "S.name"<br/>is created, allowing rapid lookups on this file. | OBJECT |  | [Set_Membership-101_439](#Set_Membership-101_439)
**Components**{::nomarkdown}<pre><code>  components</code></pre>{:/} | 10 | This multiple contains the components of this orderable item, i.e. drug<br/>ingredients or tests in a lab panel. | OBJECT |  | [Components-101_431](#Components-101_431)
**Inpatient Med**{::nomarkdown}<pre><code>  inpatient_med</code></pre>{:/} | 50.1 | This field indicates if this drug is selectable for an inpatient med order. | ENUMERATION |  | {::nomarkdown}YES-IV: <em><strong>2</strong></em><br/>YES: <em><strong>1</strong></em><br/>NO: <em><strong>0</strong></em>{:/}
**Outpatient Med**{::nomarkdown}<pre><code>  outpatient_med</code></pre>{:/} | 50.2 | This field indicates if this drug is selectable for an outpatient med order. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Iv Base**{::nomarkdown}<pre><code>  iv_base</code></pre>{:/} | 50.3 | This field indicates if this drug is selectable as a base for an IV Fluid<br/>order. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Iv Additive**{::nomarkdown}<pre><code>  iv_additive</code></pre>{:/} | 50.4 | This field indicates if this drug is selectable as an additive for an IV<br/>Fluid order. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Supply**{::nomarkdown}<pre><code>  supply</code></pre>{:/} | 50.5 | This field indicates if this item is selectable for a medication supply<br/>order. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Non-formulary**{::nomarkdown}<pre><code>  nonformulary</code></pre>{:/} | 50.6 | This field indicates if this item is available in the local formulary. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Non-va Meds**{::nomarkdown}<pre><code>  nonva_meds</code></pre>{:/} | 50.7 | This field indicates if this drug is selectable for a non-VA med order. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Specimen**{::nomarkdown}<pre><code>  specimen</code></pre>{:/} | 60.1 | This is the specimen to be collected for this test; it is in the 6-piece<br/>HL7 format, where the first 3 pieces are the code, name, and system of<br/>the SNOMED code for this specimen, and the last 3 pieces are similarly<br/>from the local Site/Specimen file. | STRING |  | 
**Can Lab Collect**{::nomarkdown}<pre><code>  can_lab_collect</code></pre>{:/} | 60.2 | This identifies which specimens the lab phlebotomy team can collect. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Sequence**{::nomarkdown}<pre><code>  sequence</code></pre>{:/} | 60.3 | This field indicates the order in which specimens are presented for<br/>selection, the first being the most often selected and the default. | NUMERIC |  | 
**Max Order Frequency**{::nomarkdown}<pre><code>  max_order_frequency</code></pre>{:/} | 60.4 | This is used to control how often this item may be ordered within a given<br/>time period.  This item may be ordered only once within the number of days<br/>specified in this field. | NUMERIC |  | 
**Daily Order Max**{::nomarkdown}<pre><code>  daily_order_max</code></pre>{:/} | 60.5 | This is the number of times within a given day that this item may be<br/>ordered. | NUMERIC |  | 
**Lab Section**{::nomarkdown}<pre><code>  lab_section</code></pre>{:/} | 60.6 | This is the lab section to which orders for this test and sample will be<br/>sent. | ENUMERATION |  | {::nomarkdown}BLOOD BANK: <em><strong>BB</strong></em><br/>ELECTRON MICROSCOPY: <em><strong>EM</strong></em><br/>SURGICAL PATHOLOGY: <em><strong>SP</strong></em><br/>CYTOLOGY: <em><strong>CY</strong></em><br/>MICROBIOLOGY: <em><strong>MI</strong></em><br/>CHEMISTRY: <em><strong>CH</strong></em><br/>AUTOPSY: <em><strong>AU</strong></em>{:/}
**Type**{::nomarkdown}<pre><code>  type-60_7</code></pre>{:/} | 60.7 | This field indicates if this item may be selected when ordering a lab<br/>test, and/or if it is included in this file for results reporting only. | ENUMERATION |  | {::nomarkdown}input: <em><strong>I</strong></em><br/>neither: <em><strong>N</strong></em><br/>both: <em><strong>B</strong></em><br/>output: <em><strong>O</strong></em>{:/}
**Contrast Media**{::nomarkdown}<pre><code>  contrast_media</code></pre>{:/} | 71.1 | This field indicates what contrast media, if any, is used by this<br/>radiologic procedure where:<br/> <br/>      I = Ionic Iodinated<br/>      N = Non-ionic Iodinated<br/>      L = Gadolinium<br/>      C = Cholecystographic<br/>      G = Gastrografin<br/>      B = Barium<br/>      M = Unspecified contrast media<br/> <br/>This value may consist of as many of these flags as are appropriate for<br/>this procedure; if empty, no contrast media is assumed.  This field is <br/>used primarily for Order Checking. | STRING |  | 
**Procedure Type**{::nomarkdown}<pre><code>  procedure_type</code></pre>{:/} | 71.2 | This field identifies the procedure type for this orderable item whether<br/>broad or detailed, a series or parent exam. | ENUMERATION |  | {::nomarkdown}DETAILED: <em><strong>D</strong></em><br/>BROAD: <em><strong>B</strong></em><br/>PARENT: <em><strong>P</strong></em><br/>SERIES: <em><strong>S</strong></em>{:/}
**Imaging Type**{::nomarkdown}<pre><code>  imaging_type</code></pre>{:/} | 71.3 | This is the imaging type of this radiology procedure. | ENUMERATION |  | {::nomarkdown}CARDIOLOGY STUDIES: <em><strong>CARD</strong></em><br/>ANGIO/NEURO/INTERVENTIONAL: <em><strong>ANI</strong></em><br/>NUCLEAR MEDICINE: <em><strong>NM</strong></em><br/>RADIOLOGY: <em><strong>RAD</strong></em><br/>CT SCAN: <em><strong>CT</strong></em><br/>ULTRASOUND: <em><strong>US</strong></em><br/>MAGNETIC RESONANCE IMAGING: <em><strong>MRI</strong></em><br/>MAMMOGRAPHY: <em><strong>MAM</strong></em><br/>VASCULAR LAB: <em><strong>VAS</strong></em>{:/}
**Common Procedure**{::nomarkdown}<pre><code>  common_procedure</code></pre>{:/} | 71.4 | This field indicates that this procedure is commonly ordered from<br/>Radiology, and is an entry in the Radiology Common Procedures file;<br/>the number stored here is the sequence number for display. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Diet Type**{::nomarkdown}<pre><code>  diet_type</code></pre>{:/} | 111.1 | This field identifies the diet type associated with this orderable item,<br/>if the order is for a diet modification or a tubefeeding product. | ENUMERATION |  | {::nomarkdown}TUBEFEEDING PRODUCT: <em><strong>T</strong></em><br/>DIET: <em><strong>D</strong></em>{:/}
**Precedence**{::nomarkdown}<pre><code>  precedence</code></pre>{:/} | 111.2 | This field is used to avoid conflicting diet modifications; items with<br/>the same precedence number may not be selected together. | NUMERIC |  | 
**Ask Expiration Date?**{::nomarkdown}<pre><code>  ask_expiration_date</code></pre>{:/} | 111.3 | This is a flag that determines if a stop date should be prompted for<br/>when placing an order for this diet. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Service Usage**{::nomarkdown}<pre><code>  service_usage</code></pre>{:/} | 123.1 | This field contains the usage of this consult service; a value here<br/>indicates that this service may NOT be selectable for ordering.  Services<br/>with a 1 are used for grouping purposes only, and a 2 indicates that<br/>only service personnel may order or forward consults to this service. | ENUMERATION |  | {::nomarkdown}GROUPER ONLY: <em><strong>1</strong></em><br/>TRACKING ONLY: <em><strong>2</strong></em>{:/}
**Blood Component**{::nomarkdown}<pre><code>  blood_component</code></pre>{:/} | 6001 |  | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Diagnostic Test**{::nomarkdown}<pre><code>  diagnostic_test</code></pre>{:/} | 6002 |  | ENUMERATION |  | {::nomarkdown}YES: <em><strong>1</strong></em><br/>TAS: <em><strong>2</strong></em><br/>NO: <em><strong>0</strong></em>{:/}

## Sub-Files
### <a name="Set_Membership-101_439"></a>Set Membership (101.439)

<dl>
<dt>ID</dt><dd>Set_Membership-101_439</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Set**{::nomarkdown}<pre><code>  set</code></pre>{:/} | .01 | This is the name of a set to which this orderable item belongs. | STRING | INDEXED<br/>REQUIRED | 
**Qo Only**{::nomarkdown}<pre><code>  qo_only</code></pre>{:/} | 2 | This field determines if the item may be ordered via the regular order<br/>dialog for this Set, or only via predefined quick orders. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}

[&uarr; Return to top](#top)<br/>


### <a name="Components-101_431"></a>Components (101.431)

<dl>
<dt>ID</dt><dd>Components-101_431</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the name of a component of this orderable item. | STRING | INDEXED<br/>REQUIRED | 
**Id**{::nomarkdown}<pre><code>  id-2</code></pre>{:/} | 2 | This is an identifier for this component, created from the 6-piece coded<br/>format passed in the Orderable Items update message from each package.<br/>It should be stored in the form of "package code;99XXX" where XXX <br/>indicates the package table originating this item (i.e. RAP, LRT, etc.). | STRING | INDEXED | 
**Code**{::nomarkdown}<pre><code>  code</code></pre>{:/} | 3 | This is the code assigned to this item by the authoritative package from a<br/>national standard coding system such as CPT or SNOMED. | STRING |  | 
**Coding System**{::nomarkdown}<pre><code>  coding_system</code></pre>{:/} | 4 | This is the system used to generate the code assigned in field 3. | ENUMERATION |  | {::nomarkdown}NATIONAL DRUG FILE: <em><strong>NDF</strong></em><br/>CPT4: <em><strong>CPT4</strong></em><br/>NATIONAL LAB TEST FILE: <em><strong>NLT</strong></em>{:/}

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}