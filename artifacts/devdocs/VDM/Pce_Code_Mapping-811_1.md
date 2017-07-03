---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Pce_Code_Mapping-811_1
# Pce Code Mapping (811.1)
This file is used to map entries from two different file to each other. It functions as a table.

<dl>
<dt>Global</dt><dd>^PXD(811.1,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**File Entry**{::nomarkdown}<pre><code>  file_entry</code></pre>{:/} | .01 | This field is a variable pointer which allows coded system entries to be<br/>mapped to an entry in PCE's supporting files.  For example, a CPT code<br/>for Pneumovax, 90732 would be the value entered here, and the Related<br/>Supporting entry field would be PNEUMO-VAC in the Immunization file.<br/>DO NOT use any general code such as 'OTHER SKIN TESTS' or 'OTHER<br/>PROCEDURE'. | POINTER | INDEXED<br/>REQUIRED | [Cpt-81](Cpt-81)<br/>[Immunization-9999999_14](Immunization-9999999_14)<br/>[Skin_Test-9999999_28](Skin_Test-9999999_28)
**Related Supporting File Entry**{::nomarkdown}<pre><code>  related_supporting_file_entry</code></pre>{:/} | .02 | A pointer to the second file encolved in this mapping.<br/>DO NOT point this field to anything that is general in nature such<br/>as 'OTHER SKIN TESTS' or 'OTHER IMMUNIZATION'. | POINTER |  | [Immunization-9999999_14](Immunization-9999999_14)<br/>[Skin_Test-9999999_28](Skin_Test-9999999_28)<br/>[Cpt-81](Cpt-81)
**From**{::nomarkdown}<pre><code>  from</code></pre>{:/} | .03 | The 2 or 3 letter mnemonic that stands for the file that the data came<br/>from or that is also being populated at this time.<br/>IMM = V IMMUNIZATIONS, CPT=V CPT ,and SK=V SKIN TESTS | STRING | REQUIRED | 
**To**{::nomarkdown}<pre><code>  to</code></pre>{:/} | .04 | The 2 or 3 letter mnemonic that stands of the file that the data is going<br/>also be put into. IMM=VIMMUNIZATIONS, CPT=V CPT, and SK=VSKIN TESTS | STRING | REQUIRED | 
**On/off Flag**{::nomarkdown}<pre><code>  on_off_flag</code></pre>{:/} | .05 | A switch that tells us that this mapping is valid, and the mapping<br/>and storing of the data is allowed to occur. | ENUMERATION | REQUIRED | {::nomarkdown}ON: <em><strong>1</strong></em><br/>OFF: <em><strong>0</strong></em>{:/}



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}