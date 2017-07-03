---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; PXRM REMINDERS AND CATEGORIES
# PXRM REMINDERS AND CATEGORIES

Returns list of reminders and categories.

Property | Value
--- | ---
Label | SEL
Routine | [PXRMRPCD](http://code.osehra.org/dox/Routine_PXRMRPCD_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [SEL^PXRMRPCD](http://code.osehra.org/dox/Routine_PXRMRPCD_source.html)
Method Comment | Selectable reminders and categories
Code | {::nomarkdown}<pre><code> N CIEN,CNAM,CNT,DATA,RCLASS,RNAM,RPNAM,RIEN,TYPE,USAGE<br/> S TYPE="R",RPNAM="",CNT=0<br/> F  S RPNAM=$O(^PXD(811.9,"D",RPNAM)) Q:RPNAM=""  D<br/> .S RIEN=0<br/> .F  S RIEN=$O(^PXD(811.9,"D",RPNAM,RIEN)) Q:'RIEN  D<br/> ..;Include only CPRS reminders<br/> ..S USAGE=$P($G(^PXD(811.9,RIEN,100)),U,4) I USAGE'["C",USAGE'["*" Q<br/> ..I USAGE["L"!(USAGE["O") Q<br/> ..;Skip inactive reminders<br/> ..S DATA=$G(^PXD(811.9,RIEN,0)) Q:DATA=""  Q:$P(DATA,U,6)<br/> ..S RNAM=$P(DATA,U),RCLASS=$P($G(^PXD(811.9,RIEN,100)),U)<br/> ..S CNT=CNT+1,ORY(CNT)=TYPE_U_RIEN_U_RPNAM_U_RNAM_U_RCLASS<br/> S TYPE="C",CNAM=""<br/> F  S CNAM=$O(^PXRMD(811.7,"B",CNAM)) Q:CNAM=""  D<br/> .S CIEN=$O(^PXRMD(811.7,"B",CNAM,"")) Q:'CIEN<br/> .S CNT=CNT+1,ORY(CNT)=TYPE_U_CIEN_U_CNAM<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}