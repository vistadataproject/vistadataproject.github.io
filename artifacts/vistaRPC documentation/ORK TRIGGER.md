---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORK TRIGGER 

 property | value 
--- | --- 
 label | {::nomarkdown}ORK TRIGGER{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [ORKCHK](http://code.osehra.org/dox/Routine_ORKCHK_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This function returns a list of order check messages.  {:/}


### Method description

 property | value 
 --- | --- 
 Method comment | initiate order checking
 Leading comment lines | {::nomarkdown}ORKY: array of returned msgs in format: ornum^orderchk ien^clin danger^msg<br/>ORKDFN: patient dfn<br/>ORKA: array of order information in the format:<br/>orderable item ien|<br/>display group-filler app|<br/>nat'l id^nat'l text^nat'l code sys^local id^local text^local code sys|<br/>effective d/t|<br/>order number|<br/>filler data (LR: specimen ien, PS: meds prev ordered during this session in format med1^med2^...)<br/>ORKMODE: mode/event trigger (DISPLAY,SELECT,ACCEPT,SESSION,ALL,NOTIF)<br/>PS: meds previously ordered during this session med1^med2^...<br/>OROIL: array containing the order info passed in (oly for ACCEPT mode)<br/>ORDODSG: flag that denotes if dosage checks should be performed<br/>1 for perform dosage checks<br/>0 for do not perform dosage checks{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number from the Patient File [#2].{:/} | 
| {::nomarkdown}ORDER INFO{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array of order information in the format: orderable item #filler appnat't id^nat'l text^nat'l coding system^local id^local text^local codingsystemorder effective date/timeorder number.{:/} | 
| {::nomarkdown}ORDER MODE/EVENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Indicates the mode or event which trigger the need for order checking.Set of codes including: DISPLAY, SELECT, ACCEPT, SESSION, NOTIF, ALL.{:/} | 




 Generated on January 13th 2017, 6:24:32 am