---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Eligibility_Code-8
# Eligibility Code (8)
The ELIGIBILITY CODE file contains all the eligibility codes that can be assigned to a patient.  All entries in this file must be associated with an entry in the MAS ELIGIBILITY CODE file.    The MAS ELIGIBILITY CODE(#8.1) file consists of those codes which have been established by VACO MAS.  Currently there are 18 eligibility codes in use by the Dept of Veterans Affairs.   The site is not allowed to add entries to the MAS ELIGIBILITY CODE file. However,the site is permitted to add local entries to the ELIGIBILITY CODE file.  To add/edit eligibility codes use the option "Eligibility Code Enter/Edit [DG ELIG CODE ENTER/EDIT]".  The option is on the "Eligibility/ID Maintenance Menu [DG ELIG MAINTENANCE]" menu.   Normally,adding local codes is not needed. However,the VA/DOD sharing agreement software,being developed by the Dallas ISC,does need and use this functionality.  

<dl>
<dt>Global</dt><dd>^DIC(8,</dd>
<dt>Domain</dt><dd>Patients</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This field contains the site specific name for the eligibility.<br/>In most cases the name will be the same as the MAS ELIGIBILITY CODE<br/>pointed to by the MAS ELIGIBILITY CODE field of this file. | STRING | INDEXED<br/>REQUIRED | 
**Make Record Sensitive?**{::nomarkdown}<pre><code>  make_record_sensitive</code></pre>{:/} | .12 | Answer YES if patients with this eligibility should have there records<br/>automatically added to the DG SECURITY LOG file so that the patient"s<br/>record will be listed as sensitive. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Card Color**{::nomarkdown}<pre><code>  card_color</code></pre>{:/} | 1 | This field indicates the color of the patient"s card for the MAS<br/>eligibility.<br/> <br/>This field is automatically updated with the value of the<br/>"CARD COLOR" of the MAS ELIGIBILITY CODE(#8.1) entry<br/>pointed to by field #8,MAS ELIGIBILITY CODE.<br/> <br/>This field is uneditable. | ENUMERATION | REQUIRED | {::nomarkdown}PURPLE: <em><strong>P</strong></em><br/>BLUE: <em><strong>B</strong></em><br/>RED: <em><strong>R</strong></em>{:/}
**Abbreviation**{::nomarkdown}<pre><code>  abbreviation</code></pre>{:/} | 2 | This field may contain an abbreviation for the eligibility name.  It<br/>may be used in place of the name in selected prints. | STRING |  | 
**VA Code Number**{::nomarkdown}<pre><code>  va_code_number</code></pre>{:/} | 3 | This field contains the VA CODE NUMBER that has been assigned to this<br/>eligibility.<br/> <br/>This field is automatically updated with the value of the "VA<br/>CODE NUMBER" of the MAS ELIGIBILITY CODE(#8.1) entry<br/>pointed to by field #8,MAS ELIGIBILITY CODE.<br/> <br/>This field is uneditable. | NUMERIC | INDEXED<br/>REQUIRED | 
**Type**{::nomarkdown}<pre><code>  type-4</code></pre>{:/} | 4 | This field indicates the type of patient that can be assigned this<br/>eligibility. The patient is either a "veteran" or a "non-veteran"<br/>type.<br/> <br/>This field is automatically updated with the value of the<br/>"TYPE" of the MAS ELIGIBILITY CODE(#8.1) entry pointed<br/>to by field #8,MAS ELIGIBILITY CODE.<br/> <br/>This field is uneditable. | ENUMERATION | REQUIRED | {::nomarkdown}NON-VETERAN: <em><strong>N</strong></em><br/>VETERAN: <em><strong>Y</strong></em>{:/}
**Print Name**{::nomarkdown}<pre><code>  print_name</code></pre>{:/} | 5 | This field contains a shorten eligibility name that is used for<br/>output that has limited space to print. | STRING | REQUIRED | 
**Inactive**{::nomarkdown}<pre><code>  inactive</code></pre>{:/} | 6 | If the eligibility is inactive then this field will be set to "YES". | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Select As Additional**{::nomarkdown}<pre><code>  select_as_additional</code></pre>{:/} | 7 | This field indicates whether patients may be assigned this<br/>eligibility as an "additional" eligibility.<br/> <br/>If the field is set to "NO" or is not filled in,then the eligibility<br/>can only be assigned as a primary eligibility.<br/> <br/>If set to "YES",then the eligibility can be used as both a primary<br/>and an "additional" eligibility.<br/> <br/>This field is automatically updated with the value of the<br/>"SELECT AS ADDITIONAL" of the MAS ELIGIBILITY CODE(FILE #8.1)<br/>entry pointed to by field #8,MAS ELIGIBILITY CODE.<br/> <br/>This field is uneditable. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Mas Eligibility Code**{::nomarkdown}<pre><code>  mas_eligibility_code</code></pre>{:/} | 8 | This field is required.  All entries in this file must be<br/>associated with an entry in the MAS ELIGIBILITY CODE file<br/>in order to be valid.<br/> <br/>This relationship with the MAS ELIGIBILITY CODE is used<br/>throughout the MAS software for statistics and reporting<br/>purposes.  It is very important.<br/> <br/>When this field is entered or edited,then the fields CARD COLOR(#1),<br/>VA CODE NUMBER(#3),TYPE(#4) and SELECT AS ADDITIONAL(#7) are<br/>automatically updated.  They are updated with the values of<br/>same fields entered for the MAS ELIGIBILITY CODE entry that was selected. | POINTER | INDEXED<br/>REQUIRED | [Mas_Eligibility_Code-8_1](Mas_Eligibility_Code-8_1)
**Id Format**{::nomarkdown}<pre><code>  id_format</code></pre>{:/} | 9 | This field indicates which identification format is to be used<br/>when setting a patient"s ID who has been assigned this eligibility.<br/> <br/>Most eligibilities should be associated with "VA STANDARD" format.<br/>This format is the patient"s Social Security Number.<br/> <br/>If your site has a DOD/VA sharing agreement AND are running<br/>the VA/DOD software developed by the Dallas ISC,then you<br/>may have to associate some DOD specific eligibilities with<br/>a format other than "VA STANDARD". | POINTER | INDEXED<br/>REQUIRED | [Identification_Format-8_2](Identification_Format-8_2)
**Synonym**{::nomarkdown}<pre><code>  synonym</code></pre>{:/} | 10 | This multiple contains all of the alternative names by which a user may<br/>call up this eligibility code.  This can be modified at the site level. | STRING |  | 
**Agency**{::nomarkdown}<pre><code>  agency</code></pre>{:/} | 11 | This field contains the AGENCY that is associated with this <br/>eligibility.  Normally,the agency is the VA. | POINTER |  | [Agency-4_11](Agency-4_11)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}