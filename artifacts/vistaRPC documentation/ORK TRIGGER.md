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
 Leading comment lines | ORKY: array of returned msgs in format: ornum^orderchk ien^clin danger^msg
ORKDFN: patient dfn
ORKA: array of order information in the format:
orderable item ien|
display group-filler app|
nat'l id^nat'l text^nat'l code sys^local id^local text^local code sys|
effective d/t|
order number|
filler data (LR: specimen ien, PS: meds prev ordered during this session in format med1^med2^...)
ORKMODE: mode/event trigger (DISPLAY,SELECT,ACCEPT,SESSION,ALL,NOTIF)
PS: meds previously ordered during this session med1^med2^...
OROIL: array containing the order info passed in (oly for ACCEPT mode)
ORDODSG: flag that denotes if dosage checks should be performed
1 for perform dosage checks
0 for do not perform dosage checks

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number from the Patient File [#2].{:/} | 
| {::nomarkdown}ORDER INFO{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array of order information in the format: orderable item #|filler app|nat't id^nat'l text^nat'l coding system^local id^local text^local codingsystem|order effective date/time|order number.{:/} | 
| {::nomarkdown}ORDER MODE/EVENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Indicates the mode or event which trigger the need for order checking.Set of codes including: DISPLAY, SELECT, ACCEPT, SESSION, NOTIF, ALL.{:/} | 




 Generated on January 13th 2017, 5:52:13 am