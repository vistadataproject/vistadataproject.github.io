---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Facility_Treating_Specialty-45_7
# Facility Treating Specialty (45.7)
This file is used to maintain the various teams of specialties that are used to treat a patient during his episodes of care. A change in the bedsection associated with the treating specialties causes the generation of changes in bedsection for PTF purposes. the generation of changes in bedsection for PTF purposes.

<dl>
<dt>Global</dt><dd>^DIC(45.7,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | Contains the name of the facility treating specialty.  Types of<br/>treating specialties may vary between facilities. | STRING | INDEXED<br/>REQUIRED | 
**Specialty**{::nomarkdown}<pre><code>  specialty</code></pre>{:/} | 1 | This field contains the treating specialty name as entered by<br/>facility or distributed with software.  Pointer to  Specialty File | POINTER | INDEXED<br/>REQUIRED | [Specialty-42_4](Specialty-42_4)
**Service**{::nomarkdown}<pre><code>  service</code></pre>{:/} | 2 | This field contains the associated Service of the treating specialty. | POINTER | INDEXED | [Service_section-49](Service_section-49)
**Providers**{::nomarkdown}<pre><code>  providers</code></pre>{:/} | 10 | Primary care physicians associated with treating specialty. | POINTER |  | [New_Person-200](New_Person-200)
**Abbreviation**{::nomarkdown}<pre><code>  abbreviation</code></pre>{:/} | 99 | Formerly honeywell code may now assume other uses.<br/>Enter an abbreviation (1-5 characters) to be used when <br/>Patients Treating Specialty is to be displayed on the G&L.<br/>If there is nothing entered here the first five characters <br/>of the name for this facility treating specialty will appear <br/>on the G&L. | STRING | INDEXED | 
**Effective Date**{::nomarkdown}<pre><code>  effective_date</code></pre>{:/} | 100 |  | OBJECT |  | [Effective_Date-45_702](#Effective_Date-45_702)

### Subfile
#### <a name="Effective_Date-45_702"></a>Effective Date

<dl>
<dt>ID</dt><dd>Effective_Date-45_702</dd>
<dt>File Type</dt><dd>45.702</dd>
<dt>Label</dt><dd>Effective Date</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Effective Date**{::nomarkdown}<pre><code>  effective_date</code></pre>{:/} | .01 | This multiple holds the effective date(s) for the Facility Treating<br/>Specialties<br/>  | DATE-TIME | INDEXED<br/>REQUIRED | 
**Active?**{::nomarkdown}<pre><code>  active</code></pre>{:/} | .02 | This field will be an active/inactive flag for the facility treating<br/>specialty. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}