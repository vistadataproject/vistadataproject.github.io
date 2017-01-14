---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPT CLINRNG 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT CLINRNG{:/}
 tag | {::nomarkdown}CLINRNG{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of selectable options from which a user can choose a daterange for appointments.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CLINRNG^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | return date ranges for clinic appointments
 Code | ```  S LST(1)="T;T^Today"<br/> S LST(2)="T+1;T+1^Tomorrow"<br/> S LST(3)="T-1;T-1^Yesterday"<br/> S LST(4)="T-7;T^Past Week"<br/> S LST(5)="T-31;T^Past Month"<br/> S LST(6)="S^Specify Date Range..."<br/> N %,%H,X,SUNDAY,START<br/> S LST(1)=DT_";"_DT_"^Today",X=$$HTFM^XLFDT($H+1,1)<br/> S LST(2)=X_";"_X_"^Tomorrow"<br/> S X=+$H F  Q:X#7=3  S X=X-1                        ; $H#7=3 is Sunday<br/> S LST(3)=$$HTFM^XLFDT(X)_";"_$$HTFM^XLFDT(X+6)_"^This Week"<br/> S LST(4)=$$HTFM^XLFDT(X+7)_";"_$$HTFM^XLFDT(X+13)_"^Next Week"<br/> S LST(5)=$E(DT,1,5)_"01;"_$E(DT,1,5)_"31^This Month"<br/> S X=$E(DT,4,5)+1 S:X=13 X=1 S X=$E(DT,1,3)_$TR($J(X,2)," ",0)<br/> S LST(6)=X_"01;"_X_"31^Next Month"<br/> S LST(7)="^Specify Dates"```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}