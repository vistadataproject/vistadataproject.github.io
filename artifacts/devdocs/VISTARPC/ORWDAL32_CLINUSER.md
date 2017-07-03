---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDAL32 CLINUSER
# ORWDAL32 CLINUSER

Determine if user can perform cover sheet allergy actions.

Property | Value
--- | ---
Label | CLINUSER
Routine | [ORWDAL33](http://code.osehra.org/dox/Routine_ORWDAL33_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [CLINUSER^ORWDAL33](http://code.osehra.org/dox/Routine_ORWDAL33_source.html)
Method Comment | can user mark allergy as entered in error
Code | {::nomarkdown}<pre><code> N DIC,X,PRM,Y,ORLST,ORX,PLIST,VALUE<br/> S DIC=8989.51,DIC(0)="MX",X="OR ALLERGY ENTERED IN ERROR" D ^DIC<br/> I Y=-1 S ORY=0 Q  ;Parameter not found so quit<br/> S PRM=+Y<br/> S ORY=$$GET^XPAR("USR",PRM) I ORY'="" Q<br/> D ENVAL^XPAR(.ORLST,PRM)<br/> I ORLST>0 D<br/> . S ORX="" F  S ORX=$O(ORLST(ORX)) Q:ORX=""  D<br/> . . Q:ORX'["USR(8930"<br/> . . I $$ISA^USRLM(DUZ,+ORX) S VALUE(+ORX)=ORLST(ORX,1)<br/> . S ORX=0 F  S ORX=$O(VALUE(ORX)) Q:'+ORX  D REMOVE(ORX)<br/> . S ORX=0 F  S ORX=$O(VALUE(ORX)) Q:'+ORX  S VALUE=$G(VALUE)!(VALUE(ORX))<br/> S ORY=$G(VALUE)<br/> I ORY'="" Q<br/> S ORY=$$GET^XPAR("DIV^SYS",PRM) I ORY'="" Q<br/> S ORY=0 Q</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODAllergy.pas">Orders/rODAllergy.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}