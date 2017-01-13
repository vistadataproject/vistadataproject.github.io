---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PXRM REMINDERS AND CATEGORIES 

 property | value 
--- | --- 
 label | {::nomarkdown}PXRM REMINDERS AND CATEGORIES{:/}
 tag | {::nomarkdown}SEL{:/}
 routine | [PXRMRPCD](http://code.osehra.org/dox/Routine_PXRMRPCD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns list of reminders and categories.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Selectable reminders and categories
 Lines | ```
 N CIEN,CNAM,CNT,DATA,RCLASS,RNAM,RPNAM,RIEN,TYPE,USAGE
 S TYPE="R",RPNAM="",CNT=0
 F  S RPNAM=$O(^PXD(811.9,"D",RPNAM)) Q:RPNAM=""  D
 .S RIEN=0
 .F  S RIEN=$O(^PXD(811.9,"D",RPNAM,RIEN)) Q:'RIEN  D
 ..;Include only CPRS reminders
 ..S USAGE=$P($G(^PXD(811.9,RIEN,100)),U,4) I USAGE'["C",USAGE'["*" Q
 ..I USAGE["L"!(USAGE["O") Q
 ..;Skip inactive reminders
 ..S DATA=$G(^PXD(811.9,RIEN,0)) Q:DATA=""  Q:$P(DATA,U,6)
 ..S RNAM=$P(DATA,U),RCLASS=$P($G(^PXD(811.9,RIEN,100)),U)
 ..S CNT=CNT+1,ORY(CNT)=TYPE_U_RIEN_U_RPNAM_U_RNAM_U_RCLASS
 S TYPE="C",CNAM=""
 F  S CNAM=$O(^PXRMD(811.7,"B",CNAM)) Q:CNAM=""  D
 .S CIEN=$O(^PXRMD(811.7,"B",CNAM,"")) Q:'CIEN
 .S CNT=CNT+1,ORY(CNT)=TYPE_U_CIEN_U_CNAM
```




 Generated on January 13th 2017, 6:55:29 am