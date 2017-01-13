---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP4 HDR MODIFY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP4 HDR MODIFY{:/}
 tag | {::nomarkdown}HDR{:/}
 routine | [ORWRP4](http://code.osehra.org/dox/Routine_ORWRP4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC looks at data returned from the HDR and makes any modificationsnecessary to make the data compatible with CPRS Reports.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Extract/Modify data from the HDR
 Input Parameters | {::nomarkdown}HANDLE<br/>ID{:/}
 Lines | ```
 N X,ORIFN,ORID,ORCNT,ORTN,ORENT,ORRTN
 S ROOT=""
 I $G(HANDLE)="" S ROOT(0)="-1^Bad Handle" Q
 I '$D(^XTMP(HANDLE)) S ROOT(0)="-1^Bad Handle" Q
 S ORID=$O(^ORD(101.24,"AC",ID,0))
 I $G(ORID)="" S ROOT(0)="-1^No ID match" Q
 S ORCNT=$O(^ORD(101.24,ORID,3,"C",9999),-1)
 I $G(ORCNT)="" S ROOT(0)="-1^No Columns for Report" Q
 S ORTN=$P(^ORD(101.24,ORID,4),"^",6),ORENT=$P(^(4),"^",7)
 I '$L(ORTN) S ROOT(0)="-1^No HDR Routine exists" Q
 S ORRTN=ORENT_"^"_ORTN
 I '$L($T(@ORRTN)) S ROOT(0)="-1^HDR Routine non-existant" Q
 D @ORRTN```
 Leading comment lines | {::nomarkdown}HANDLE=Remote Broker ID in ^XTMP(HANDLE,"D",<br/>ID=Report ID found in field .02 file 101.24{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}HANDLE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Remote Broker ID needed to find data in ^XTMP(HANDLE,\D\,{:/} | 
| {::nomarkdown}ID {:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Report ID found in field .02 of file 101.24{:/} | 




 Generated on January 13th 2017, 6:55:29 am