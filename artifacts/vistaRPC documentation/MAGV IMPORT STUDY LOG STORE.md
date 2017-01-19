---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV IMPORT STUDY LOG STORE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV IMPORT STUDY LOG STORE{:/}
 tag | {::nomarkdown}IMPLOGIN{:/}
 routine | [MAGVIM03](http://code.osehra.org/dox/Routine_MAGVIM03_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Collects study-level data for objects imported by Imaging Importer II application (MAG*3.0*118).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} |  | {::nomarkdown}DUZ of Importer II user who reconciled artifacts to this study.{:/} | 
| {::nomarkdown}USER LOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}6{:/} |  | {::nomarkdown}Logon site, location, or division of the user who reconciled artifacts to this study.{:/} | 
| {::nomarkdown}PATIENT DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} |  | {::nomarkdown}DFN of the Patient to whose study the imported artifacts were reconciled.{:/} | 
| {::nomarkdown}ACCESSION NUMBER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}24{:/} |  | {::nomarkdown}Accession Number of the study to which the imported artifacts were reconciled.{:/} | 
| {::nomarkdown}STUDY INSTANCE UID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}64{:/} |  | {::nomarkdown}STUDY INSTANCE UID of the study to which the imported artifacts were reconciled.DICOM STANDARD IDENTIFIER: (0020,000D){:/} | 
| {::nomarkdown}STUDY ORIGINATING LOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} |  | {::nomarkdown}Location where the imported study was performed.{:/} | 
| {::nomarkdown}ASSOCIATED STUDY TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} |  | {::nomarkdown}RADiology, CONsult, LABoratory, etc. of the study to which the imported artifacts were reconciled.{:/} | 
| {::nomarkdown}STUDY SERIES COUNT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} |  | {::nomarkdown}Number of series comprising this study.{:/} | 
| {::nomarkdown}STUDY MODALITY COUNTS{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}List of Name-Value pairs representing each modality and its count for the imported objects.{:/} | 
| {::nomarkdown}MEDIA LOG IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Unique identifier of an Importer II media import event. Used to cross-reference fields inthis file with specific source media in the MAGV IMPORT MEDIA LOG file (#2006.9422).{:/} | 
| {::nomarkdown}OBJFAIL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}6{:/} |  | {::nomarkdown}Count of requested objects which failed to be imported for this study.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:54 am</p>{:/}