---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT CLINRNG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT CLINRNG{:/}
 tag | {::nomarkdown}CLINRNG{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of selectable options from which a user can choose a daterange for appointments.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return date ranges for clinic appointments
 Lines | ```
 S LST(1)="T;T^Today"
 S LST(2)="T+1;T+1^Tomorrow"
 S LST(3)="T-1;T-1^Yesterday"
 S LST(4)="T-7;T^Past Week"
 S LST(5)="T-31;T^Past Month"
 S LST(6)="S^Specify Date Range..."
 N %,%H,X,SUNDAY,START
 S LST(1)=DT_";"_DT_"^Today",X=$$HTFM^XLFDT($H+1,1)
 S LST(2)=X_";"_X_"^Tomorrow"
 S X=+$H F  Q:X#7=3  S X=X-1                        ; $H#7=3 is Sunday
 S LST(3)=$$HTFM^XLFDT(X)_";"_$$HTFM^XLFDT(X+6)_"^This Week"
 S LST(4)=$$HTFM^XLFDT(X+7)_";"_$$HTFM^XLFDT(X+13)_"^Next Week"
 S LST(5)=$E(DT,1,5)_"01;"_$E(DT,1,5)_"31^This Month"
 S X=$E(DT,4,5)+1 S:X=13 X=1 S X=$E(DT,1,3)_$TR($J(X,2)," ",0)
 S LST(6)=X_"01;"_X_"31^Next Month"
 S LST(7)="^Specify Dates"```




 Generated on January 13th 2017, 6:55:28 am