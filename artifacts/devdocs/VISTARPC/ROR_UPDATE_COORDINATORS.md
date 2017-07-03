---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ROR UPDATE COORDINATORS
# ROR UPDATE COORDINATORS

The ROR UPDATE COORDINATORS remote procedure updates the list of registry coordinators that is stored in the COORDINATOR (14) multiple of the ROR REGISTRY PARAMETERS file (#798.1).

Property | Value
--- | ---
Label | RCLUPD
Routine | [RORRP023](http://code.osehra.org/dox/Routine_RORRP023_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of the registry parameters record in the ROR REGISTRY PARAMETERS file #798.1).
RCLST | LIST |  | true | The RCLST parameter should be an array containing a list of user IENs(DUZs). The corresponding users will be designated as the registrycoordinators. Example:  with RPCBroker.Param[1] do    begin      PType :&#x3D;list;      for i :&#x3D; 1 to Coordinators.Count do        Mult[i] :&#x3D; Coordinators[i-1].IEN;    end;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}