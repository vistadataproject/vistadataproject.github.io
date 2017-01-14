---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDAL32 CLINUSER 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDAL32 CLINUSER{:/}
 tag | {::nomarkdown}CLINUSER{:/}
 routine | [ORWDAL33](http://code.osehra.org/dox/Routine_ORWDAL33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Determine if user can perform cover sheet allergy actions.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CLINUSER^[ORWDAL33](http://code.osehra.org/dox/Routine_ORWDAL33_source.html)
 Method comment | can user mark allergy as entered in error
 Code | ```  N DIC,X,PRM,Y,ORLST,ORX,PLIST,VALUE
 S DIC=8989.51,DIC(0)="MX",X="OR ALLERGY ENTERED IN ERROR" D ^DIC
 I Y=-1 S ORY=0 Q  ;Parameter not found so quit
 S PRM=+Y
 S ORY=$$GET^XPAR("USR",PRM) I ORY'="" Q
 D ENVAL^XPAR(.ORLST,PRM)
 I ORLST>0 D
 . S ORX="" F  S ORX=$O(ORLST(ORX)) Q:ORX=""  D
 . . Q:ORX'["USR(8930"
 . . I $$ISA^USRLM(DUZ,+ORX) S VALUE(+ORX)=ORLST(ORX,1)
 . S ORX=0 F  S ORX=$O(VALUE(ORX)) Q:'+ORX  D REMOVE(ORX)
 . S ORX=0 F  S ORX=$O(VALUE(ORX)) Q:'+ORX  S VALUE=$G(VALUE)!(VALUE(ORX))
 S ORY=$G(VALUE)
 I ORY'="" Q
 S ORY=$$GET^XPAR("DIV^SYS",PRM) I ORY'="" Q
 S ORY=0 Q```




 Generated on January 14th 2017, 7:26:36 am