---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG IMAGE SET PROPERTIES 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGG IMAGE SET PROPERTIES{:/}
 tag | {::nomarkdown}SETPROPS{:/}
 routine | [MAGGA02](http://code.osehra.org/dox/Routine_MAGGA02_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This remote procedure updates one or more image properties (fields of therecord of the IMAGE file (#2005)). If one of the following fields is updated in the parent or the child of agroup that has only one image, then the changes are replicated to thechild or parent respectively: SHORT DESCRIPTION (10), TYPE INDEX (42),PROC/EVENT INDEX (43), SPEC/SUBSPEC INDEX (44), ORIGIN INDEX (45),CREATION DATE (110), CONTROLLED IMAGE (112), STATUS (113), and STATUSREASON (113.3).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IMGIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN of the image record in the IMAGE file (#2005).{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Reserved for future use.{:/} | 
| {::nomarkdown}PROPVALS{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Items of this list define new values of image properties. Each item has3 pieces separated by '^':   ^01: Parameter name  ^02: \\ (empty)  ^03: Value The following parameters are supported by this remote procedure:   CRTNDT^^{Date/time}    Internal or external value for the CREATION DATE field (110)    of the IMAGE file #2005.   GDESC^^{Text}    Text for the SHORT DESCRIPTION field (10) of the file #2005.   ISTAT^^{Name or Code}    Internal or external value for the STATUS field (113)    of the file #2005.   ISTATRSN^^{Name or IEN}    Name or IEN of a reason for image status change    (see the STATUS REASON field (113.3) of the file #2005    for details).   IXORIGIN^^{Name or Code}    Internal or external value for the ORIGIN INDEX field (45)    of the file #2005.   IXPKG^^{Name or Code}    Internal or external value for the PACKAGE INDEX field (40)    of the file #2005.   IXPROC^^{Name or IEN}    Procedure/Event name or IEN (see the PROC/EVENT INDEX    field (43) of the file #2005 for details).   IXSPEC^^{Name or IEN}    Specialty/SubSpecialty name or IEN (see the SPEC/SUBSPEC    INDEX field (44) of the file #2005 for details).   IXTYPE^^{Name or IEN}    Image type name or IEN (see the TYPE INDEX field (42) of    the file #2005 for details).   PARDF^^{File Number}    Value for the PARENT DATA FILE# field (16) of    the file #2005.   PARGRD0^^{IEN}    Value for the PARENT GLOBAL ROOT D0 field (17) of    the file #2005.   PARGRD1^^{IEN}    Value for the PARENT GLOBAL ROOT D1 field (63) of    the file #2005.   PARIPTR^^{IEN}    Value for the PARENT DATA FILE IMAGE POINTER field (18)    of the file #2005.   PROC^^{Name}    Name of the procedure (see the PROCEDURE field (6)     of the file #2005 for details).   PROCDT^^{Date/time}    Internal or external value for the PROCEDURE/EXAM     DATE/TIME field (15) of the IMAGE file #2005.   SENSIMG^^{Name or Code}    Internal or external value for the CONTROLLED IMAGE field     (112) of the file #2005. For pointer type parameters, pure numeric values are always treated asinternal entry numbers (IEN). For sets of codes, the API checks for internal values first. So, if thereis an ambiguity between internal and external values, the parameter valuewill be treated as the internal one. Parameters can be added to the list in any order. See comments precedingthe SETPROPS^MAGGA02 for more details. Example:   with RPCBroker.Param[2] do    begin      PType := list;      Mult[1] := 'IXPKG^^RAD';      Mult[2] := 'IXSPEC^^1';      Mult[3] := 'IXORIGIN^^NON-VA';    end;{:/} | 




 Generated on January 13th 2017, 6:44:48 am