---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Provider_Narrative-9999999_27 

 property | value 
--- | --- 
 id | Provider_Narrative-9999999_27
 fmId | 9999999.27
 label | Provider Narrative
 location | ^AUTNPOV(
 description | {::nomarkdown}This file contains each unique POV NARRATIVE QUALIFIER.<br/> <br/>{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| narrative | .01 | Narrative | {::nomarkdown}This is the Narrative that the provider has written out that is his<br/>description of what he treated the patient for.<br/> <br/>Enter a 2 to 80 character description.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| mnemonic | 8801 | Mnemonic | {::nomarkdown}This is a mnemonic that stands for this provider narrative.<br/> <br/>Enter a 1-2 character mnemonic.<br/>Enter a 1-2 character mnemonic.{:/} | STRING |  |  |  | 
| clinical_lexicon | 75701 | Clinical Lexicon | {::nomarkdown}This is the clinical expression related to the provider narrative.{:/} | POINTER |  |  | [Expressions-757_01](Expressions-757_01.md) | 
| originating_file | 75702 | Originating File | {::nomarkdown}This field is used in the VA to identify what file pointing to the<br/>provider narrative file created the entry in the Provider Narrative<br/>File.  This may be useful as more packages create pointers to the<br/>Provider Narrative File to store the local capture of provider terminology.<br/>  <br/>The Problem List package puts its free text file number in this field<br/>when it adds provider narratives to the Provider Narrative File.{:/} | STRING |  |  |  | 




 Generated on January 12th 2017, 6:21:34 am