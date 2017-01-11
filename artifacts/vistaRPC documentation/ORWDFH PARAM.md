---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDFH PARAM 

 property | value 
--- | --- 
 label | ORWDFH PARAM
 tag | PARAM
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | ARRAY
 description | Returns dietetics parameters for a patient at a location.


### Method description

 property | value 
--- | --- 
 Method comment | Return dietetics parameters for a patient at a location
 Leading comment lines | ORLOC: hospital location ptr to ^SC #44,ORLST(1)=EB1^EB2^EB3^LB1^LB2^LB3^EN1^EN2^...LE2^LE3,ORLST(2)=BAB^BAE^NAB^NAE^EAB^EAE^BegB^BegN^BegE^Bagged,ORLST(3)=type of service^RegIEN^NPOIEN^EarlyIEN^LateIEN^TFIFN,ORLST(4)=max days in future for outpatient recurring meals,ORLST(5)=default outpatient diet