---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Person_Class-8932_1
# Person Class (8932.1)
This file holds the CMS (HCFA) provider type data.   In 2001, ANSI ASC X12N asked the National Uniform Claim Committee (NUCC) to become the official maintainer of the Health Care Provider Taxonomy List (provider type).   PERSON CLASS is to be used for identifying provider types for roll-ups.   Patches need to review the technical description on field 90002.

<dl>
<dt>Global</dt><dd>^USC(8932.1,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Number**{::nomarkdown}<pre><code>  number</code></pre>{:/} | .001 | This is a number field to allow adding new entries by number. | IEN |  | 
**Provider Type**{::nomarkdown}<pre><code>  provider_type</code></pre>{:/} | .01 | This is Level I of NUCC's structure of the Provider Taxonomy. | STRING | INDEXED<br/>REQUIRED | 
**Classification**{::nomarkdown}<pre><code>  classification</code></pre>{:/} | 1 | This is the CMS (X12) Classification (Level II). | STRING |  | 
**Area Of Specialization**{::nomarkdown}<pre><code>  area_of_specialization</code></pre>{:/} | 2 | This is Level III in NUCC's structure of the Provider Taxonomy.  It is the<br/>most specific, but sometimes defines a "sub-category" of Classification. | STRING |  | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | 3 | This field will allow old entries to be disabled without removing<br/>them from the table. | ENUMERATION |  | {::nomarkdown}Active: <em><strong>a</strong></em><br/>Inactive: <em><strong>i</strong></em>{:/}
**Date Inactivated**{::nomarkdown}<pre><code>  date_inactivated</code></pre>{:/} | 4 | This field holds the date that this Class was inactivated. | DATE-TIME |  | 
**VA Code**{::nomarkdown}<pre><code>  va_code</code></pre>{:/} | 5 | This field holds the 7 character VA assigned code for national roll-up. | STRING | INDEXED | 
**X12 Code**{::nomarkdown}<pre><code>  x12_code</code></pre>{:/} | 6 | This is the code assigned by X12N.  X12 published the joint X12N and CMS<br/>Health Care Provider Taxonomy following the June 1997 X12 meeting. | STRING | INDEXED | 
**Reserved**{::nomarkdown}<pre><code>  reserved</code></pre>{:/} | 7 | This field is only to help a conversion routine for updates to the file.<br/>Any data is used only be a update routine. | STRING |  | 
**Specialty Code**{::nomarkdown}<pre><code>  specialty_code</code></pre>{:/} | 8 | This field holds the specialty code associated with the classification | STRING |  | 
**Definition**{::nomarkdown}<pre><code>  definition</code></pre>{:/} | 11 |  | STRING |  | 
**Individual/non**{::nomarkdown}<pre><code>  individual_non</code></pre>{:/} | 90002 | This field indicates whether the entry is for an Individual or for a<br/>Non-Individual, and was added at the request of IHS in their namespace,<br/>until the file supporting Non-Individuals can be defined.<br/> <br/>Note that the current definition of the X12 CODE does not explicitly<br/>indicate whether an entry is for an Individual or for a Non-Individual,<br/>either in value or structure definition. | ENUMERATION |  | {::nomarkdown}NON-INDIVIDUAL: <em><strong>N</strong></em><br/>INDIVIDUAL: <em><strong>I</strong></em>{:/}



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}