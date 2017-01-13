---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORCNOTE GET TOTAL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORCNOTE GET TOTAL{:/}
 tag | {::nomarkdown}GETTOT{:/}
 routine | [ORCNOTE](http://code.osehra.org/dox/Routine_ORCNOTE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | get total count of progress notes
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | ```{::nomarkdown} N ORTIDT,ORTIFN<br/> S ORY=0<br/> Q:'$G(DFN)<br/> F ORTIDT=0:0 S ORTIDT=$O(^TIU(8925,"ACLPT",3,DFN,ORTIDT)) Q:ORTIDT<1  D<br/> .F ORTIFN=0:0 S ORTIFN=$O(^TIU(8925,"ACLPT",3,DFN,ORTIDT,ORTIFN)) Q:ORTIFN<1  S ORY=ORY+1<br/>```{:/}
 Leading comment lines | {::nomarkdown}^TIU(8925,"ACLPT",3) refers to progress notes class{:/}




 Generated on January 13th 2017, 7:11:27 am