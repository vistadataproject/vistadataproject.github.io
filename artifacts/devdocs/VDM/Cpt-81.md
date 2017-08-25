---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Cpt-81<br/>
<a name="top"></a>
# Cpt (81)
This file contains the Current Procedural Terminology (CPT) codes published by the American Medical Association (AMA) and the HCPCS codes, published by the Health Care Financing Administration (HCFA). The entries in this file are "descriptive terms and identifying codes for reporting services and procedures performed by physicians."   If an entry needs to be added, modified or deleted a patch will be issued instructing the site how to make the change.  Otherwise, this table file should not be edited in anyway by the site.   Per VHA Directive 10-93-142, this file definition should not be modified.

**Global:** ^ICPT(

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Cpt Code**{::nomarkdown}<pre><code>  cpt_code</code></pre>{:/} | .01 | This file contains both CPT from the AMA and HCFA. The AMA entries<br/>will have an internal number less than 99999. The AMA CPT are '5'<br/>numbers that coorespond to the internal number. The HCFA codes will<br/>have an internal number of 100000 or greater. These codes are '1'<br/>alpha followed by '4' numbers, which will NOT correspond to the<br/>internal number. | STRING | INDEXED<br/>REQUIRED | 
**Short Name**{::nomarkdown}<pre><code>  short_name</code></pre>{:/} | 2 | This field contains a short description of the CPT code. It must be <br/>between 1 and 28 characters. | STRING |  | 
**Cpt Category**{::nomarkdown}<pre><code>  cpt_category</code></pre>{:/} | 3 | This field contains the CPT Category associated with CPT Code.   It<br/>is a pointer to the CPT Category File. | POINTER | INDEXED | [Cpt_Category-81_1](Cpt_Category-81_1)
**Inactive Flag**{::nomarkdown}<pre><code>  inactive_flag</code></pre>{:/} | 5 | This field is used to inactivate a CPT code. If this field contains a<br/>'1' then the code is inactive. During the annual update of the CPT file <br/>no entries are deleted; they are inactivated by setting this flag. | ENUMERATION |  | {::nomarkdown}INACTIVE CODE: <em><strong>1</strong></em>{:/}
**Source**{::nomarkdown}<pre><code>  source</code></pre>{:/} | 6 | Contains the source of the code - CPT, HCPCS or Local. | ENUMERATION |  | {::nomarkdown}LOCAL: <em><strong>L</strong></em><br/>CPT: <em><strong>C</strong></em><br/>HCPCS: <em><strong>H</strong></em>{:/}
**Inactive Date**{::nomarkdown}<pre><code>  inactive_date</code></pre>{:/} | 7 | Date the CPT code becomes/became inactivated. | DATE-TIME |  | 
**Active Date**{::nomarkdown}<pre><code>  active_date</code></pre>{:/} | 8 | Date the CPT code becomes/became activated. | DATE-TIME |  | 
**Age(low)**{::nomarkdown}<pre><code>  agelow</code></pre>{:/} | 10.01 | Code reasonable for age within Age(low) and Age(high) values.  Blank, <br/>otherwise. | NUMERIC |  | 
**Age(high)**{::nomarkdown}<pre><code>  agehigh</code></pre>{:/} | 10.02 | Code reasonable for age within Age(low) and Age(high) values.  Blank,<br/>otherwise. | NUMERIC |  | 
**Sex**{::nomarkdown}<pre><code>  sex</code></pre>{:/} | 10.03 | Code acceptable if: F = Female; M = Male. Blank otherwise. | ENUMERATION |  | {::nomarkdown}MALE: <em><strong>M</strong></em><br/>FEMALE: <em><strong>F</strong></em>{:/}
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | 50 | This multiple contains the descriptions for various CPT codes. | STRING |  | 
**Effective Date**{::nomarkdown}<pre><code>  effective_date</code></pre>{:/} | 60 |  | OBJECT |  | [Effective_Date-81_02](#Effective_Date-81_02)
**Short Name (versioned)**{::nomarkdown}<pre><code>  short_name_versioned</code></pre>{:/} | 61 | This is a history of the Procedures (short text) to include the date the<br/>text was first used along with the text. | OBJECT |  | [Short_Name_versioned-81_061](#Short_Name_versioned-81_061)
**Description (versioned)**{::nomarkdown}<pre><code>  description_versioned</code></pre>{:/} | 62 | This is a history of the descriptive text to include the date the <br/>text was first used and the text used. | OBJECT |  | [Description_versioned-81_062](#Description_versioned-81_062)

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Effective_Date-81_02"></a>Effective Date (81.02)

<dl>
<dt>ID</dt><dd>Effective_Date-81_02</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Effective Date**{::nomarkdown}<pre><code>  effective_date</code></pre>{:/} | .01 | Date from which current status is effective. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | .02 |  | ENUMERATION | REQUIRED | {::nomarkdown}ACTIVE: <em><strong>1</strong></em><br/>INACTIVE: <em><strong>0</strong></em>{:/}

[&uarr; Return to top](#top)<br/>


### <a name="Short_Name_versioned-81_061"></a>Short Name (versioned) (81.061)

<dl>
<dt>ID</dt><dd>Short_Name_versioned-81_061</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Version Date**{::nomarkdown}<pre><code>  version_date</code></pre>{:/} | .01 | This is the date the procedure text was first used. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Short Name (versioned)**{::nomarkdown}<pre><code>  short_name_versioned</code></pre>{:/} | 1 | This is the procedure that was used beginning on the 'effective date.' | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Description_versioned-81_062"></a>Description (versioned) (81.062)

<dl>
<dt>ID</dt><dd>Description_versioned-81_062</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Version Date**{::nomarkdown}<pre><code>  version_date</code></pre>{:/} | .01 | This is the date the description was first used. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Description (versioned)**{::nomarkdown}<pre><code>  description_versioned</code></pre>{:/} | 1 | This is the long description (multiple line).  | STRING |  | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}