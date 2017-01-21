---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN URGENCIES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN URGENCIES{:/}
 tag | {::nomarkdown}URG{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of applicable urgencies from PROTOCOL file 101,given a ConsultIEN and type.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Consult ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal file number of consult in file 123.{:/} | 
| {::nomarkdown}Request type{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Consult or procedure.  Pointer to PROTOCOL file 101.  Value iseither 'GMRCOR CONSULT' or 'GMRCOR REQUEST'.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | URG^[ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 Method comment | new urgency from 101.42
 Input parameters | {::nomarkdown}GMRCO{:/}
 Code | {::nomarkdown}  Q:+$G(GMRCO)=0<br> N GMRCURG,X,GMRCCSLT,GMRCPROC,GMRCTYPE,GMRCPROT<br> S GMRCCSLT=$O(^ORD(101,"B","GMRCOR CONSULT",0))<br> S GMRCPROC=$O(^ORD(101,"B","GMRCOR REQUEST",0))<br> S GMRCTYPE=$P(^GMR(123,+GMRCO,0),"^",17)<br> I $P(^GMR(123,+GMRCO,0),"^",18)["I" D<br> . S X=$S(GMRCTYPE=GMRCCSLT:"S.GMRCT",1:"S.GMRCR")<br> E  S X="S.GMRCO"<br> S GMRCURG=""<br> F I=1:1  S GMRCURG=$O(^ORD(101.42,X,GMRCURG)) Q:GMRCURG=""  D<br> .S GMRCPROT=$O(^ORD(101,"B","GMRCURGENCY - "_GMRCURG,0))<br> .S Y(I)=GMRCPROT_U_GMRCURG<br> .;S Y(I)=$O(^ORD(101.42,X,GMRCURG,0))_U_GMRCURG{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}