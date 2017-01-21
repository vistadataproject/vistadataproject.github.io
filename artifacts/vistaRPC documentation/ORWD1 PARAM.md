---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD1 PARAM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWD1 PARAM{:/}
 tag | {::nomarkdown}PARAM{:/}
 routine | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the prompt and device parameters for Automated order prints{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to the Hospital location file where the prints are generatedfrom.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PARAM^[ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 Method comment | Returns in 'Y' the print parameters
 Input parameters | {::nomarkdown}LOC{:/}
 First comment | {::nomarkdown}<pre>Y=Prompt for CC^Prompt for L ^Prompt for R ^Prompt for W ^CC device ^L Device ^R Device ^WC device<br/>Device Params returned in internal;external format, the rest are internal<br/>CC=Chart Copy<br/>L=Label<br/>R=Requisitions<br/>WC=Work Copy<br/>'Prompt for' values (internal):<br/>0 for no prompts- chart copy is automatically generated.<br/>1 to prompt for chart copy and ask which printer should be used.<br/>2 to prompt for chart copy and automatically print to the<br/>  printer defined in the CHART COPY PRINT DEVICE field.<br/>* don't print.<br/>LOC=Ptr to location ^SC(LOC,</pre>{:/}
 Code | {::nomarkdown}  Q:'$G(LOC)<br> S Y=$$BLDIT(LOC){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}