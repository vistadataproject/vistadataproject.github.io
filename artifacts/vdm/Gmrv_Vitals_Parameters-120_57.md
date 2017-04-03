---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Gmrv_Vitals_Parameters-120_57 

<dl>
<dt>id</dt><dd>Gmrv_Vitals_Parameters-120_57</dd>
<dt>fmId</dt><dd>120.57</dd>
<dt>label</dt><dd>Gmrv Vitals Parameters</dd>
<dt>location</dt><dd>^GMRD(120.57,</dd>
<dt>description</dt><dd>This file contains the various site configurable parameters for the<br/>Vitals/Measurements application.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This field provides an arbitrary name for the single entry in this file.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| quick_order_protocol_counter | 1 | Quick Order Protocol Counter | {::nomarkdown}This field contains a counter which is appended to the end of each<br/>quick order protocol.{:/} | NUMERIC |  |  |  | 
| gmrv_initialization_switch | 1.3 | Gmrv Initialization Switch | {::nomarkdown}This field contains a switch used by the GMRVINIT's ONLY.  NO EDITING ALLOWED!!!{:/} | NUMERIC |  |  |  | 
| stop_date_default | 2 | Stop Date Default | {::nomarkdown}This field stores the number of days allotted in between the start date of a<br/>vitals order and the stop date.{:/} | NUMERIC |  |  |  | 
| cancel_on_ward_transfer | 3 | Cancel On Ward Transfer | {::nomarkdown}This field indicates that a flag is present to cancel vital measurement <br/>orders when a patient transfers between wards.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| cancel_on_service_transfer | 4 | Cancel On Service Transfer | {::nomarkdown}This field indicates that a flag is present to cancel vital measurement <br/>orders when a patient transfers between services.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| abnormal_temperature__high | 5.1 | Abnormal Temperature - High | {::nomarkdown}This field indicates the upper limit for an acceptable range of patient <br/>temperatures. The abnormal high is equal to or greater than the value <br/>entered.{:/} | NUMERIC |  | REQUIRED |  | 
| abnormal_temperature__low | 5.2 | Abnormal Temperature - Low | {::nomarkdown}This field sets the lower limit for an acceptable range of patient <br/>temperatures. The abnormal low is equal to or below that of the value <br/>entered.{:/} | NUMERIC |  | REQUIRED |  | 
| abnormal_pulse__high | 5.3 | Abnormal Pulse - High | {::nomarkdown}This field sets the upper limit of an acceptable pulse rate. The abnormal <br/>high is equal to or greater than the value entered.{:/} | NUMERIC |  | REQUIRED |  | 
| abnormal_pulse__low | 5.4 | Abnormal Pulse - Low | {::nomarkdown}This field sets the lower limit of an acceptable pulse rate. The abnormal <br/>low is equal to or lower than the value entered.{:/} | NUMERIC |  |  |  | 
| abnormal_respiration__high | 5.5 | Abnormal Respiration - High | {::nomarkdown}This field sets the upper limit of an acceptable respiration rate. The <br/>abnormal high is equal to or greater than the value entered.{:/} | NUMERIC |  |  |  | 
| abnormal_respiration__low | 5.6 | Abnormal Respiration - Low | {::nomarkdown}This field sets the lower limit of an acceptable respiration rate. The <br/>abnormal low is equal to or lower than the value entered.{:/} | NUMERIC |  |  |  | 
| abnormal_systolic__high | 5.7 | Abnormal Systolic - High | {::nomarkdown}This field sets the upper limit for an acceptable systolic blood pressure.  <br/>The abnormal high is equal to or greater than the value entered.{:/} | NUMERIC |  |  |  | 
| abnormal_diastolic__high | 5.71 | Abnormal Diastolic - High | {::nomarkdown}This field sets the upper limit for an acceptable diastolic blood pressure. <br/>The abnormal high is equal to or greater than the value entered.{:/} | NUMERIC |  |  |  | 
| abnormal_systolic__low | 5.8 | Abnormal Systolic - Low | {::nomarkdown}This field sets the lower limit for an acceptable systolic blood pressure.  <br/>The abnormal low is equal to or lower than the value entered.{:/} | NUMERIC |  |  |  | 
| abnormal_diastolic__low | 5.81 | Abnormal Diastolic - Low | {::nomarkdown}This field sets the lower limit for an acceptable diastolic blood pressure. <br/>The abnormal low is equal to or lower than the value entered.{:/} | NUMERIC |  |  |  | 
| abnormal_cvp__high | 6.1 | Abnormal Cvp - High | {::nomarkdown}This field sets the upper limit of an acceptable central venous pressure<br/>rate.  The abnormal high is equal to or greater than the value entered.{:/} | NUMERIC |  | REQUIRED |  | 
| abnormal_cvp__low | 6.2 | Abnormal Cvp - Low | {::nomarkdown}This field sets the lower limit of an acceptable central venous pressure.<br/>The abnormal low is equal to or lower than the value entered.{:/} | NUMERIC |  | REQUIRED |  | 
| abnormal_o2_saturation__low | 6.3 | Abnormal O2 Saturation - Low | {::nomarkdown}This field sets the lower limit of an acceptable oxygen saturation rate.<br/>The abnormal low is equal to or lower than the value entered.{:/} | NUMERIC |  | REQUIRED |  | 
| phase_i_completed | 999 | Phase I Completed | {::nomarkdown}This field denotes whether the GMRV Site/Quality Conversion has completed.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| phase_ii_completed | 999.1 | Phase Ii Completed | {::nomarkdown}This field denotes whether the GMRV Vitals Measurement Data Conversion<br/>has completed.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| phase_ii_last_record | 999.2 | Phase Ii Last Record | {::nomarkdown}This field will contain the number of the last record to be converted<br/>by the GMRV Vitals Measurement Data Conversion, or it will be null<br/>if the conversion has completed or has not started.{:/} | NUMERIC |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on April 3rd 2017, 4:24:19 pm</p>{:/}