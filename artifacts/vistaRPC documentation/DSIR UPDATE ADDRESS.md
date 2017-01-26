---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR UPDATE ADDRESS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR UPDATE ADDRESS{:/}
 tag | {::nomarkdown}UPDADDR{:/}
 routine | [DSIROI6](http://code.osehra.org/dox/Routine_DSIROI6_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}VEJD ROI UPDATE ADDRESS        Input Record Pieces '^' delimited:1.      Address File Internal Number - Null to add new record2.      Patient - Internal Number only (required)3.      Street Address Line One - Text 35 character max (optional)4.      Street Address Line Two - Text 35 character max (optional)5.      City - Text 40 character max (optional)6.      State - Internal Number (optional)7.      Zip Code - Numeric 5 or 9 numbers (optional)8.      Address Holder - 1 character P or R (optional)9.      Holder Internal Number - Numeric (optional)10.     Begin Date - Internal FileMan format (optional)11.     End Date - Same as 1012.     Street Address Line Three - Text 30 character max (optional)Optional pieces will not update if null, pass '@' to delete/clear data for specific field.  '@' in patient piece will delete entry in address table for internal number specified in piece 1. Return Value:1.      -1 ^ Error message2.      0 - Entry deleted3.      Internal Number to address table{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ADDRESS RECORD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}