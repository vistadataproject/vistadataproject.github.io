---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWLEX GETFREQ 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWLEX GETFREQ{:/}
 tag | {::nomarkdown}GETFREQ{:/}
 routine | [ORWLEX](http://code.osehra.org/dox/Routine_ORWLEX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This call wraps the Lexicon API $$FREQ^LEXU to satisfy the requirements of the ICD-10-CM diagnosis search.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORSRCHTX{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the search text/term.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETFREQ^[ORWLEX](http://code.osehra.org/dox/Routine_ORWLEX_source.html)
 Method comment | Call $$FREQ^LEXU to fetch the frequency of use of keywords contained in search string
 Input parameters | {::nomarkdown}ORSRCHTX{:/}
 Code | {::nomarkdown}  S ORY=$$FREQ^LEXU(ORSRCHTX) ; ICR #5679<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Encounter/rPCE.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}