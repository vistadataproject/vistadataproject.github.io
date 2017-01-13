---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDFH PARAM 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH PARAM{:/}
 tag | {::nomarkdown}PARAM{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns dietetics parameters for a patient at a location.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return dietetics parameters for a patient at a location
 Leading comment lines | {::nomarkdown}ORLOC: hospital location ptr to ^SC #44<br/>ORLST(1)=EB1^EB2^EB3^LB1^LB2^LB3^EN1^EN2^...LE2^LE3<br/>ORLST(2)=BAB^BAE^NAB^NAE^EAB^EAE^BegB^BegN^BegE^Bagged<br/>ORLST(3)=type of service^RegIEN^NPOIEN^EarlyIEN^LateIEN^TFIFN<br/>ORLST(4)=max days in future for outpatient recurring meals<br/>ORLST(5)=default outpatient diet{:/}




 Generated on January 13th 2017, 6:44:47 am