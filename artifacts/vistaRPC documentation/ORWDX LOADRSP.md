---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX LOADRSP 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX LOADRSP{:/}
 tag | {::nomarkdown}LOADRSP{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Load responses from 101.41 or 100
 Input Parameters | {::nomarkdown}RSPID<br/>TRANS{:/}
 Lines | ```
 N I,J,DLG,INST,ID,VAL,ILST,ROOT,ORLOC S ROOT=""
 K ^TMP($J,"ORWDX LOADRSP","QO SAVE")
 I +RSPID=$P(RSPID,"-",1) D
 .S ^TMP($J,"ORWDX LOADRSP","QO SAVE")=+RSPID
 I RSPID["-" S ROOT="^TMP(""ORWDXMQ"",$J,"""_RSPID_""")" G XROOT^ORWDX2
 I $E(RSPID)="X" S ROOT="^OR(100,"_+$P(RSPID,"X",2)_",4.5)"  G XROOT^ORWDX2
 I +RSPID=RSPID  S ROOT="^ORD(101.41,"_+RSPID_",6)" G XROOT^ORWDX2
 Q:ROOT=""
 G XROOT^ORWDX2```
 Leading comment lines | {::nomarkdown}RSPID:  C123456;1-3243 = cached copy,   134-3234 = cached quick<br/>X123456;1      = change order,  134      = quick dialog{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RSPID{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}TRANS{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 




 Generated on January 13th 2017, 6:55:29 am