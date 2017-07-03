---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Gmrv_Vital_Measurement-120_5
# Gmrv Vital Measurement (120.5)
This file contains vital sign information and other measurement data for a  patient.

<dl>
<dt>Global</dt><dd>^GMR(120.5,</dd>
<dt>Domain</dt><dd>Vitals</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date/time Vitals Taken**{::nomarkdown}<pre><code>  date_time_vitals_taken</code></pre>{:/} | .01 | This field contains the date/time this vital/measurement was taken by the<br/>care provider. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Patient**{::nomarkdown}<pre><code>  patient</code></pre>{:/} | .02 | This field contains the name of the patient for whom this vital measurement<br/>data was entered.  Pointer to the PATIENT (#2) file. | POINTER | INDEXED<br/>REQUIRED | [Patient-2](Patient-2)
**Vital Type**{::nomarkdown}<pre><code>  vital_type</code></pre>{:/} | .03 | This field denotes the type of measurement for this record.  Pointer to<br/>the GMRV VITAL TYPE (#120.51) file. | POINTER | INDEXED<br/>REQUIRED | [Gmrv_Vital_Type-120_51](Gmrv_Vital_Type-120_51)
**Date/time Vitals Entered**{::nomarkdown}<pre><code>  date_time_vitals_entered</code></pre>{:/} | .04 | This field contains the date/time that this record was entered. | DATE-TIME | REQUIRED | 
**Hospital Location**{::nomarkdown}<pre><code>  hospital_location</code></pre>{:/} | .05 | This field contains the location where this measurement was taken.  Pointer <br/>to the HOSPITAL LOCATION (#44) file. | POINTER | REQUIRED | [Hospital_Location-44](Hospital_Location-44)
**Entered By**{::nomarkdown}<pre><code>  entered_by</code></pre>{:/} | .06 | This field contains the name of the person who edited the file entry.  <br/>Pointer to the NEW PERSON (#200) file. | POINTER | REQUIRED | [New_Person-200](New_Person-200)
**Rate**{::nomarkdown}<pre><code>  rate</code></pre>{:/} | 1.2 | This field contains the numeric value associated with this vital<br/>measurement. | STRING |  | 
**Supplemental O2**{::nomarkdown}<pre><code>  supplemental_o2</code></pre>{:/} | 1.4 | This field stores the information of the supplemental oxygen as follows:<br/>  .5-20 l/min (liters/minute)   and/or<br/>  21-100 % of oxygen concentration<br/>For example: 4.5 l/min 40%<br/>             4.5 l/min<br/>             40 % | STRING |  | 
**Entered In Error**{::nomarkdown}<pre><code>  entered_in_error</code></pre>{:/} | 2 | This field indicates that this record was flagged as entered in error. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Error Entered By**{::nomarkdown}<pre><code>  error_entered_by</code></pre>{:/} | 3 | This field indicates the name of the person responsible for entering the <br/>record in error.  Pointer to the NEW PERSON (#200) file. | POINTER |  | [New_Person-200](New_Person-200)
**Reason Entered In Error**{::nomarkdown}<pre><code>  reason_entered_in_error</code></pre>{:/} | 4 | This multiple contains a list of reasons for entering a vital measurement <br/>in error. | OBJECT |  | [Reason_Entered_In_Error-120_506](#Reason_Entered_In_Error-120_506)
**Qualifier**{::nomarkdown}<pre><code>  qualifier</code></pre>{:/} | 5 | A list of qualifiers associated with this measurement. | POINTER |  | [Gmrv_Vital_Qualifier-120_52](Gmrv_Vital_Qualifier-120_52)

### Subfile
#### <a name="Reason_Entered_In_Error-120_506"></a>Reason Entered In Error

<dl>
<dt>ID</dt><dd>Reason_Entered_In_Error-120_506</dd>
<dt>File Type</dt><dd>120.506</dd>
<dt>Label</dt><dd>Reason Entered In Error</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Reason Entered In Error**{::nomarkdown}<pre><code>  reason_entered_in_error</code></pre>{:/} | .01 | This field records the reason for entering the data in error. | ENUMERATION | REQUIRED | {::nomarkdown}INCORRECT READING: <em><strong>2</strong></em><br/>INVALID RECORD: <em><strong>4</strong></em><br/>INCORRECT DATE/TIME: <em><strong>1</strong></em><br/>INCORRECT PATIENT: <em><strong>3</strong></em>{:/}
**Date Reason Entered In Error**{::nomarkdown}<pre><code>  date_reason_entered_in_error</code></pre>{:/} | .02 |  | DATE-TIME |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}