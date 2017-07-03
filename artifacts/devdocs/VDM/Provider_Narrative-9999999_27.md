---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Provider_Narrative-9999999_27
# Provider Narrative (9999999.27)
This file contains each unique POV NARRATIVE QUALIFIER.   

<dl>
<dt>Global</dt><dd>^AUTNPOV(</dd>
<dt>Domain</dt><dd>Problems</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Narrative**{::nomarkdown}<pre><code>  narrative</code></pre>{:/} | .01 | This is the Narrative that the provider has written out that is his<br/>description of what he treated the patient for.<br/> <br/>Enter a 2 to 80 character description. | STRING | INDEXED<br/>REQUIRED | 
**Mnemonic**{::nomarkdown}<pre><code>  mnemonic</code></pre>{:/} | 8801 | This is a mnemonic that stands for this provider narrative.<br/> <br/>Enter a 1-2 character mnemonic.<br/>Enter a 1-2 character mnemonic. | STRING |  | 
**Clinical Lexicon**{::nomarkdown}<pre><code>  clinical_lexicon</code></pre>{:/} | 75701 | This is the clinical expression related to the provider narrative. | POINTER |  | [Expressions-757_01](Expressions-757_01)
**Originating File**{::nomarkdown}<pre><code>  originating_file</code></pre>{:/} | 75702 | This field is used in the VA to identify what file pointing to the<br/>provider narrative file created the entry in the Provider Narrative<br/>File.  This may be useful as more packages create pointers to the<br/>Provider Narrative File to store the local capture of provider terminology.<br/>  <br/>The Problem List package puts its free text file number in this field<br/>when it adds provider narratives to the Provider Narrative File. | STRING |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}