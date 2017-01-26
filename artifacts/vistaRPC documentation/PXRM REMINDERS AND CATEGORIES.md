---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PXRM REMINDERS AND CATEGORIES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PXRM REMINDERS AND CATEGORIES{:/}
 tag | {::nomarkdown}SEL{:/}
 routine | [PXRMRPCD](http://code.osehra.org/dox/Routine_PXRMRPCD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns list of reminders and categories.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SEL^[PXRMRPCD](http://code.osehra.org/dox/Routine_PXRMRPCD_source.html)
 Method comment | Selectable reminders and categories
 Code | {::nomarkdown}  N CIEN,CNAM,CNT,DATA,RCLASS,RNAM,RPNAM,RIEN,TYPE,USAGE<br> S TYPE="R",RPNAM="",CNT=0<br> F  S RPNAM=$O(^PXD(811.9,"D",RPNAM)) Q:RPNAM=""  D<br> .S RIEN=0<br> .F  S RIEN=$O(^PXD(811.9,"D",RPNAM,RIEN)) Q:'RIEN  D<br> ..;Include only CPRS reminders<br> ..S USAGE=$P($G(^PXD(811.9,RIEN,100)),U,4) I USAGE'["C",USAGE'["*" Q<br> ..I USAGE["L"!(USAGE["O") Q<br> ..;Skip inactive reminders<br> ..S DATA=$G(^PXD(811.9,RIEN,0)) Q:DATA=""  Q:$P(DATA,U,6)<br> ..S RNAM=$P(DATA,U),RCLASS=$P($G(^PXD(811.9,RIEN,100)),U)<br> ..S CNT=CNT+1,ORY(CNT)=TYPE_U_RIEN_U_RPNAM_U_RNAM_U_RCLASS<br> S TYPE="C",CNAM=""<br> F  S CNAM=$O(^PXRMD(811.7,"B",CNAM)) Q:CNAM=""  D<br> .S CIEN=$O(^PXRMD(811.7,"B",CNAM,"")) Q:'CIEN<br> .S CNT=CNT+1,ORY(CNT)=TYPE_U_CIEN_U_CNAM<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}