---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG FIELD VALIDATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG FIELD VALIDATE{:/}
 tag | {::nomarkdown}DVAL{:/}
 routine | [MAGQBUT4](http://code.osehra.org/dox/Routine_MAGQBUT4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This provides an interface with the VA Fileman Database Server (DBS)API for the single field validator: VAL^DIE.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the file number that contains the attribute to be validated.{:/} | 
| {::nomarkdown}IENS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number or place holder of the entry being validated.{:/} | 
| {::nomarkdown}FIELD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the number of the file attribute to be validated.{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the option set of parameters defined for the VAL^DIEE External value is returned in RESULT(0). F FDA node is set for valid data in array identified by FDA_ROOT. H Help (single ?) is returned if VALUE is not valid. R Record identified by IENS is verified to exist and to be editable. Donot  include \R\ if there are placeholders in the IENS. U Don't perform key validation. Without this flag, the data in VALUE ischecked to ensure that no duplicate keys are created and that key field values are not deleted.{:/} | 
| {::nomarkdown}VALUE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the value to be validated.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}