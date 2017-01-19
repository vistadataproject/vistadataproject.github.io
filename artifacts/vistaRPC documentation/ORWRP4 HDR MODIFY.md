---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP4 HDR MODIFY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP4 HDR MODIFY{:/}
 tag | {::nomarkdown}HDR{:/}
 routine | [ORWRP4](http://code.osehra.org/dox/Routine_ORWRP4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC looks at data returned from the HDR and makes any modificationsnecessary to make the data compatible with CPRS Reports.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}HANDLE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Remote Broker ID needed to find data in ^XTMP(HANDLE,\D\,{:/} | 
| {::nomarkdown}ID {:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Report ID found in field .02 of file 101.24{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | HDR^[ORWRP4](http://code.osehra.org/dox/Routine_ORWRP4_source.html)
 Method comment | Extract/Modify data from the HDR
 First comment | {::nomarkdown}HANDLE=Remote Broker ID in ^XTMP(HANDLE,"D",<br/>ID=Report ID found in field .02 file 101.24{:/}
 Input parameters | {::nomarkdown}HANDLE<br>ID{:/}
 Code | {::nomarkdown}  N X,ORIFN,ORID,ORCNT,ORTN,ORENT,ORRTN<br> S ROOT=""<br> I $G(HANDLE)="" S ROOT(0)="-1^Bad Handle" Q<br> I '$D(^XTMP(HANDLE)) S ROOT(0)="-1^Bad Handle" Q<br> S ORID=$O(^ORD(101.24,"AC",ID,0))<br> I $G(ORID)="" S ROOT(0)="-1^No ID match" Q<br> S ORCNT=$O(^ORD(101.24,ORID,3,"C",9999),-1)<br> I $G(ORCNT)="" S ROOT(0)="-1^No Columns for Report" Q<br> S ORTN=$P(^ORD(101.24,ORID,4),"^",6),ORENT=$P(^(4),"^",7)<br> I '$L(ORTN) S ROOT(0)="-1^No HDR Routine exists" Q<br> S ORRTN=ORENT_"^"_ORTN<br> I '$L($T(@ORRTN)) S ROOT(0)="-1^HDR Routine non-existant" Q<br> D @ORRTN{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:12 am</p>{:/}