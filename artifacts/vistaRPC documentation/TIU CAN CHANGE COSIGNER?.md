---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU CAN CHANGE COSIGNER? 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU CAN CHANGE COSIGNER?{:/}
 tag | {::nomarkdown}CANCHCOS{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}BOOLEAN RPC to evaluate user's privilege to modify the expected cosigner, given the current status of the document, and the user's role with respect to it.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the document in the TIU DOCUMENT FILE (#8925).{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CANCHCOS^[TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 Method comment | Evaluate/return whether user can change cosigner
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | ```  S TIUY=$$MAYCHNG^TIURA1(TIUDA)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}