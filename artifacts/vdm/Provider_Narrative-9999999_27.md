---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) --> Provider_Narrative-9999999_27 

 property | value 
--- | --- 
 id | Provider_Narrative-9999999_27
 fmId | 9999999.27
 label | Provider Narrative
 location | ^AUTNPOV(
 description | This file contains each unique POV NARRATIVE QUALIFIER.\r \r

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| narrative | .01 | Narrative | This is the Narrative that the provider has written out that is his\rdescription of what he treated the patient for.\r \rEnter a 2 to 80 character description. | STRING |  | REQUIRED, INDEXED |  | 
| mnemonic | 8801 | Mnemonic | This is a mnemonic that stands for this provider narrative.\r \rEnter a 1-2 character mnemonic.\rEnter a 1-2 character mnemonic. | STRING |  |  |  | 
| clinical_lexicon | 75701 | Clinical Lexicon | This is the clinical expression related to the provider narrative. | POINTER |  |  | [Expressions-757_01](Expressions-757_01.md) | 
| originating_file | 75702 | Originating File | This field is used in the VA to identify what file pointing to the\rprovider narrative file created the entry in the Provider Narrative\rFile.  This may be useful as more packages create pointers to the\rProvider Narrative File to store the local capture of provider terminology.\r  \rThe Problem List package puts its free text file number in this field\rwhen it adds provider narratives to the Provider Narrative File. | STRING |  |  |  | 