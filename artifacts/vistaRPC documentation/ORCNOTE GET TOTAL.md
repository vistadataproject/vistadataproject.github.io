---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORCNOTE GET TOTAL 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORCNOTE GET TOTAL{:/}
 tag | {::nomarkdown}GETTOT{:/}
 routine | [ORCNOTE](http://code.osehra.org/dox/Routine_ORCNOTE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETTOT^[ORCNOTE](http://code.osehra.org/dox/Routine_ORCNOTE_source.html)
 Method comment | get total count of progress notes
 First comment | {::nomarkdown}^TIU(8925,"ACLPT",3) refers to progress notes class{:/}
 Input parameters | {::nomarkdown}DFN{:/}
 Code | ```  N ORTIDT,ORTIFN
 S ORY=0
 Q:'$G(DFN)
 F ORTIDT=0:0 S ORTIDT=$O(^TIU(8925,"ACLPT",3,DFN,ORTIDT)) Q:ORTIDT<1  D
 .F ORTIFN=0:0 S ORTIFN=$O(^TIU(8925,"ACLPT",3,DFN,ORTIDT,ORTIFN)) Q:ORTIFN<1  S ORY=ORY+1
```




 Generated on January 14th 2017, 7:26:36 am