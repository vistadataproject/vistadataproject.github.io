---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC FM GET FIELD ATTRIB 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC FM GET FIELD ATTRIB{:/}
 tag | {::nomarkdown}FIELD{:/}
 routine | [DSICFM06](http://code.osehra.org/dox/Routine_DSICFM06_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This will return the inputted field attributes for a file. As of 7/29/2003, these attributes are available:AUDIT AUDIT CONDITION COMPUTE ALGORITHM COMPUTED FIELDS USED DATE FIELD LAST EDITED DECIMAL DEFAULT DELETE ACCESS DESCRIPTION FIELD LENGTH GLOBAL SUBSCRIPT LOCATION HELP-PROMPT INPUT TRANSFORM LABEL MULTIPLE-VALUED OUTPUT TRANSFORM POINTER READ ACCESS SOURCE SPECIFIER TECHNICAL DESCRIPTION TITLE TYPE WRITE ACCESS XECUTABLE HELP {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This can be the file number or the full name of the file.  For subfiles, it must be the subfile number.{:/} | 
| {::nomarkdown}FIELD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the field number or the full name of the field{:/} | 
| {::nomarkdown}FLAG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a flag controlling what will be returned.The default value is <null>.  FLAG can contain N.If FLAG contains N then do not return attributes whose value is <null>If FLAGS contains Z, then for WOrd Processing attributes, include  the zeroth node with the text{:/} | 
| {::nomarkdown}ATT{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a list of attributes to return.  List[n] := attribute name  where n=0,1,2,3,... You can send List[0] := \*\ to get all field attributes{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}