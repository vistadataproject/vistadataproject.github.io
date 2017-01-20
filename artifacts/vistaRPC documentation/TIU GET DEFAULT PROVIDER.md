---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET DEFAULT PROVIDER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET DEFAULT PROVIDER{:/}
 tag | {::nomarkdown}DEFDOC{:/}
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC returns the default provider as specified by the TIU Site ParameterDEFAULT PRIMARY PROVIDER, which has the following allowable values:0      NONE, DON'T PROMTIn which case the call will return 0^1      DEFAULT, BY LOCATIONIn this case, the call will return the default provider for a given HospitalLocation, as specified in the set-up for the Clinic in MAS. If a defaultprovider is specified for the location in question, that person will bereturned. If the Clinic set-up specifies use of the Primary Provider (if defined) for the patient, then that person will be returned. The returnformat will be DUZ^LASTNAME,FIRSTNAME.2      AUTHOR (IF PROVIDER)In this case, the call will return the current user (if they are a known Provider). If their not a known Provider, then the call will return 0^.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}HLOC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to the Hospital Location File (#44).{:/} | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Optional Pointer to the New Person File (#200) identifying the Author. If nothing is passed, the current user will be assumed.{:/} | 
| {::nomarkdown}TIUIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Record # (IEN) of the document in the TIU DOCUMENT FILE(#8925).{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DEFDOC^[TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 Method comment | Get default primary provider
 Input parameters | {::nomarkdown}HLOC, USER, TIUDT, TIUIEN{:/}
 Code | {::nomarkdown}  N TIUSPRM,TIUDDOC,TIUAUTH<br> D SITEPARM(.TIUSPRM)<br> S TIUDDOC=+$P(TIUSPRM,U,8)<br> S TIUAUTH=$S((+$G(USER)!('+$G(TIUIEN))):0,1:+$P($G(^TIU(8925,+$G(TIUIEN),12)),U,2))<br> S USER=$S(+$G(USER):+$G(USER),+$G(TIUAUTH):+$G(TIUAUTH),1:DUZ)<br> S TIUDT=$S(+$G(TIUDT):+$G(TIUDT),1:DT)<br> S TIUY=$S(TIUDDOC=1:$$DFLTDOC^TIUPXAPI(HLOC),TIUDDOC=2:$$CURDOC(USER),1:"0^"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}