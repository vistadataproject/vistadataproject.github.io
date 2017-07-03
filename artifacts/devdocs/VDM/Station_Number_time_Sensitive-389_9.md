---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Station_Number_time_Sensitive-389_9
# Station Number (time Sensitive) (389.9)
The purpose of this file is to allow DHCP software flexibility and reliability when the station number of a medical center changes or when one or more stations have merged into one station.   Adding or modifing entries in this file may affect many DHCP applications. Control of entry into this file should be carefully controlled by the IRM Service Chief.

<dl>
<dt>Global</dt><dd>^VA(389.9,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Reference Number**{::nomarkdown}<pre><code>  reference_number</code></pre>{:/} | .01 | This field is the reference number of the entry in the file.  It is <br/>assigned by the enter/edit routine. | NUMERIC | INDEXED<br/>REQUIRED | 
**Effective Date**{::nomarkdown}<pre><code>  effective_date</code></pre>{:/} | .02 | This is the effective date of the station number for this division.  If<br/>you are creating a new division with a new station number then the entry<br/>for this division should be sufficient.  If your medical center is changing<br/>station numbers then an entry for this effective date is required for all<br/>medical center divisions. | DATE-TIME | INDEXED | 
**Medical Center Division**{::nomarkdown}<pre><code>  medical_center_division</code></pre>{:/} | .03 | This is the medical center division that you want to create a station<br/>number entry for.  You must create one entry for each medical center <br/>division.  If you are changing station numbers then one entry for each<br/>division is required for the new effective date. | POINTER | INDEXED | [Medical_Center_Division-40_8](Medical_Center_Division-40_8)
**Station Number**{::nomarkdown}<pre><code>  station_number</code></pre>{:/} | .04 | This is the 3 digit station number, if this divison has a suffix then<br/>this is the station number and the suffix. | STRING | INDEXED<br/>REQUIRED | 
**Is Primary Division**{::nomarkdown}<pre><code>  is_primary_division</code></pre>{:/} | .05 | Each station has one primary divison.  This normally is the divison where<br/>the station number is 3 numberic characters with no suffix.  If this is the<br/>primary division then this field should be set to 'YES'.<br/> <br/>Only one division may be the primary division at a time. | STRING |  | 
**Inactive**{::nomarkdown}<pre><code>  inactive</code></pre>{:/} | .06 | This field is used to inactivate a station number.  A new entry for a<br/>station number for the date it became inactive is required, and this<br/>field should be made set to 'YES' for the entry that inactivates the<br/>station number. | ENUMERATION |  | {::nomarkdown}YES - INACTIVE: <em><strong>1</strong></em><br/>NO - ACTIVE: <em><strong>0</strong></em>{:/}
**Other Institution**{::nomarkdown}<pre><code>  other_institution</code></pre>{:/} | .07 | If this entry in the Station Number file is for a station that is not<br/>a Medical Center Division then this is the institution pointer to this <br/>entry.<br/> <br/>This field isn't currently used but could be used for possibly Record<br/>Tracking, Outpatient Pharmacy CMOP's, or Reference Lab work and others<br/>if only I knew what else to do with it. | POINTER |  | [Institution-4](Institution-4)
**Integration Name**{::nomarkdown}<pre><code>  integration_name</code></pre>{:/} | 17000 | This will be used for the new name for sites that have integrated. | STRING |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}