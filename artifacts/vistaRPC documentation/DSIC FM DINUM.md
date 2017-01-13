---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC FM DINUM 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIC FM DINUM{:/}
 tag | {::nomarkdown}DINUM{:/}
 routine | [DSICFM02](http://code.osehra.org/dox/Routine_DSICFM02_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will do a lookup on the inputted file for the requested value.  This is only for files whose .01 field is defined to be a DINUM pointer to afile.  If the lookup value in not in the inputted file, then this will add that pointer to that file.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the file number of the DSS file which has a .01 DINUM'd field{:/} | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the ien of the pointed to file.  If the .01 field is not a pointer field then this parameter should not be passed when trying to add a new entry to the file.{:/} | 
| {::nomarkdown}VAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the external value of the .01 field.   If the .01 field is a pointer field, then this would be some external lookup value for the pointed to file.   If the .01 field is not a pointer, then this must numeric.{:/} | 
| {::nomarkdown}IENS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This field is only valid if you are trying to add a DINUM'd value to a multiple in the FILE.  The syntax of iens is ,S1,S2,S3,   See M programmers for precise syntax to use if you need this.{:/} | 




 Generated on January 13th 2017, 6:24:32 am