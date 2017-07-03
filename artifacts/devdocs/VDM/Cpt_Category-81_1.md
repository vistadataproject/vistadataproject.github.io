---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Cpt_Category-81_1
# Cpt Category (81.1)
None

<dl>
<dt>Global</dt><dd>^DIC(81.1,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Category Name**{::nomarkdown}<pre><code>  category_name</code></pre>{:/} | .01 | This field contains the category name associated with specified CPT<br/>Code. | STRING | INDEXED<br/>REQUIRED | 
**Type Of Category**{::nomarkdown}<pre><code>  type_of_category</code></pre>{:/} | 2 | This field contains the type of category associated with specified CPT<br/>code.<br/>It is a set of codes where 'm' - Major Category<br/>                           's' - Sub-Category | ENUMERATION |  | {::nomarkdown}SUB-CATEGORY: <em><strong>s</strong></em><br/>MAJOR CATEGORY: <em><strong>m</strong></em>{:/}
**Major Category**{::nomarkdown}<pre><code>  major_category</code></pre>{:/} | 3 | This field contains the Major Category associated with specified CPT<br/>Code.  It is a pointer to the CPT Category File. | POINTER | INDEXED | [Cpt_Category-81_1](Cpt_Category-81_1)
**Begin Cpt Range**{::nomarkdown}<pre><code>  begin_cpt_range</code></pre>{:/} | 4 | Lowest CPT/HCPCS code to which this category applies. | STRING |  | 
**End Cpt Range**{::nomarkdown}<pre><code>  end_cpt_range</code></pre>{:/} | 5 | Highest CPT/HCPCS code to which this category applies. | STRING |  | 
**Source**{::nomarkdown}<pre><code>  source</code></pre>{:/} | 6 | Category defined by CPT or HCPCS. | ENUMERATION |  | {::nomarkdown}CPT: <em><strong>C</strong></em><br/>HCPCS: <em><strong>H</strong></em>{:/}
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | 100 | This field contains the full description of the  CPT Category chosen. | STRING |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}