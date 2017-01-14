---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU REM DLG OK AS TEMPLATE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}TIU REM DLG OK AS TEMPLATE{:/}
 tag | {::nomarkdown}REMDLGOK{:/}
 routine | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns TRUE is the passed in reminder dialog is allowed to be used ina TIU Template.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Reminder Dialog IEN.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | REMDLGOK^[TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 Method comment | Returns TRUE if the passed in Reminder Dialog IEN is
 First comment | {::nomarkdown}Allowed to be used as a TIU Template{:/}
 Input parameters | {::nomarkdown}TIUIEN{:/}
 Code | ```  N TIULST,SRV
 S TIUY=-1
 I '$D(^PXRMD(801.41,+$G(TIUIEN))) Q
 I +$P(^PXRMD(801.41,+$G(TIUIEN),0),U,3)>0 Q  ;ICR 3410
 S TIUY=1
 D RDACCUM(.TIULST,"USR","Q")
 I $$RDINLST(.TIULST,TIUIEN) Q
 S SRV=$$GETSRV(DUZ)
 D RDACCUM(.TIULST,"SRV.`"_+$G(SRV),"Q")
 I $$RDINLST(.TIULST,TIUIEN) Q
 D RDACCUM(.TIULST,"DIV","Q")
 I $$RDINLST(.TIULST,TIUIEN) Q
 D RDACCUM(.TIULST,"SYS","Q")
 I $$RDINLST(.TIULST,TIUIEN) Q
 S TIUY=0```




 Generated on January 14th 2017, 7:26:35 am