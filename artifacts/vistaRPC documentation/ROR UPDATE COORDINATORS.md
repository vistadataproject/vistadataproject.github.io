---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR UPDATE COORDINATORS 

 property | value 
--- | --- 
 label | {::nomarkdown}ROR UPDATE COORDINATORS{:/}
 tag | {::nomarkdown}RCLUPD{:/}
 routine | [RORRP023](http://code.osehra.org/dox/Routine_RORRP023_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The ROR UPDATE COORDINATORS remote procedure updates the list of registry coordinators that is stored in the COORDINATOR (14) multiple of the ROR REGISTRY PARAMETERS file (#798.1).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REGIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The REGIEN parameter should contain a valid registry IEN (IEN of the registry parameters record in the ROR REGISTRY PARAMETERS file #798.1).{:/} | 
| {::nomarkdown}RCLST{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The RCLST parameter should be an array containing a list of user IENs(DUZs). The corresponding users will be designated as the registrycoordinators. Example:  with RPCBroker.Param[1] do    begin      PType :=list;      for i := 1 to Coordinators.Count do        Mult[i] := Coordinators[i-1].IEN;    end;{:/} | 




 Generated on January 13th 2017, 6:55:29 am