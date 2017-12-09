---
layout: default
title: VAM B1 Release Note
---

__NOTE__: fill in properly the week of December 11th.

__TODO__: ensure code READMEs are like [VICS Server README](https://github.com/vistadataproject/VICSServer/tree/master/emulation/server#management-rpcs) with picture, descriptions ie/ not separate wiki's but doc in with code. ... TOC/index from here and in the demo trail (_Source Code Overview_) ... RPC Router will get one too (note: importance that station #, vista's match)

__TODO__: emphasize security of linode (port sets)

See [[vamArchitecture]]

2 Goals: establish [1] Runtime Architecture, [2] Common Utility Services, [3] VICS Data Model and [4] RPC Emulation.

Runtime Architecture ...

Build 1 has an integrated demo of [a] VICS Server, [b] Router, [c] VISTA [d] Management Client and [e] CPRS running on a web-hosted VM. 

Common Utility Services ... 

> A VICS does not re-implement common functionality but re-uses utilities and common services it shares with other VICSs.

This release establishes and tests these services and focuses on RPCs whose emulation directly access these common services. Examples include RPCs that read parameter values from the parameter service, which lookup identifiers (IENs) by name and which fetch time and date.

VICS Data Model ...

> a VICS Data Model that will refine relevant classes of the Common Native Model

(see https://github.com/vistadataproject/DataExtractNSync#data-extraction-and-synchronization for more language)

RPC Emulation covers RPCs that rely solely or mainly on Common Utility Services such as the Parameter Service or Time Service.

Contents Outline:
  * Parameter-Only RPCs (36) and Parameter Service Complete 
    * SAVE (parameter) RPCs that are not routed but are supported (as sync not in Build 1)
    * Outline the parameters and entity types in scope given the RPCs in scope for VAM ie/ fixed set of parameters and RPCs which puts a bound on Parameter Service function and its testing ... get into dataset 9999's coverage of scenarios to cover all cases
  * Location (44, 4, 40.8 ...) RPCs (param and file) ... all covered?
  * User (200) RPCs (param and file) ... all covered?
  * Session concept (covering service and locn/division of user ... per station etc)
  * Demo Linode contents: Router, nodeVISTA, VAM Service, web page on how to download CPRS, demo trail
    * moving to cloud in build 2
    * open with diagram opening all
  * Other RPCs ... User/Locn?
  * establishes all active pieces except PDE Web client, Not IOC-able
  * starts addressing Architecture requirement to: _Centralizing the enormous volume of “utility” RPCs repeatedly called by CPRS. Such RPCs tell the time or configure a screen size. Centralizing would remove a burden from local VistAs without changing CPRS in any way and would reduce the resources required to service RPC traffic_

More Particulars:
  1. One fixed User (VAM Server is always with the same user) and nodeVISTA station #
     * Security Support in Router (Router knows of Login?) or NOT? 
     * Router Supports "visit" connections (used by JLV)?
  2. NO PATIENT SELECTION (calls in server are not clinical/patient independent)
  3. nodeVISTA dataset
  4. 70 RPCs emulated - use 
  5. RPC Router - one user, pass through ... nodeVISTA handles refusal/CPRS enforces
     * no client enforcement of login etc
     * mgmt client does show RPC traffic and distinguishes the 70 as emulated
  6. No Time Zone management (local user time)

## RPC Emulation

### Build 1 In-Scope RPCs (71) as of 11/28/2017
```
GMV CONVERT DATE
GMV DLL VERSION
GMV GET CURRENT TIME
GMV GET VITAL TYPE IEN
ORB SORT METHOD
ORDEA DEATEXT
OREVNTX1 DLGIEN
ORIMO ISCLOC
ORQ NULL LIST
ORQORB SORT
ORQPT DEFAULT LIST SOURCE
ORQQCN2 GET CONTEXT
ORQQPX NEW REMINDERS ACTIVE
ORWCH LOADALL
ORWCH LOADSIZ
ORWCIRN AUTORDV
ORWCOM ORDEROBJ
ORWCOM PTOBJ
ORWCV1 COVERSHEET LIST
ORWDAL32 CLINUSER
ORWDAL32 DEF
ORWDPS32 VALQTY
ORWDPS32 VALROUTE
ORWDRA32 LOCTYPE
ORWDX DGNM
ORWDX WRLST
ORWDX2 DCREASON
ORWDXC ON
ORWDXM MSTYLE
ORWDXVB3 COLLTIM
ORWDXVB3 SWPANEL
ORWOR PKISITE
ORWORB GETSORT
ORWORDG IEN
ORWPCE ALWAYS CHECKOUT
ORWPCE ANYTIME
ORWPCE ASKPCE
ORWPCE AUTO VISIT TYPE SELECT
ORWPCE GET EDUCATION TOPICS
ORWPCE GET EXAM TYPE
ORWPCE GET EXCLUDED
ORWPCE GET HEALTH FACTORS TY
ORWPCE GET IMMUNIZATION TYPE
ORWPCE GET SET OF CODES
ORWPCE GET SKIN TEST TYPE
ORWPCE1 NONCOUNT
ORWPS REASON
ORWPT CLINRNG
ORWPT16 PSCNVT
ORWSR SHOW SURG TAB
ORWTPD1 GETEAFL
ORWTPD1 GETEDATS
ORWTPO CSARNGD
ORWTPO GETIMGD
ORWU CLINLOC
ORWU DT
ORWU HASKEY
ORWU PARAM
ORWU PATCH
ORWU TOOLMENU
ORWU VALDT
ORWU VALIDSIG
ORWU VERSRV
ORWU1 NEWLOC
TIU GET PRINT NAME
TIU TEMPLATE ACCESS LEVEL
TIU TEMPLATE GET DEFAULTS
XUS GET USER INFO
XUS PKI GET UPN
XWB GET BROKER INFO
XWB IM HERE
```

## Custom VAM RPCs

3 for the VICS Server

See [Custom VAM RPCs](https://github.com/vistadataproject/VICSServer/tree/master/emulation/server#management-rpcs)

## Command Line Client

... may put into demo trail, instead of CPRS ... running with one or other (or just pt to this client as the source of our __Test RESULTs__)

## Testing

Show [[Example CI Performance Report]] and other final reports from CI.

## MVDM Datasets

TODO: "websites" for all of 442 (MVDM of Meta of Cheyenne Clone), 999 (MVDM off nodeVISTA), 9999 (MVDM of 442 Meta, re-identified and reduced just for VAM)

## RPC Router Manager

  * REM: Router is one user, one VISTA, one National Services Server ... will support multiple users in build 2
    * need diagram of 1, 1, many
  * Note: the B1 Router Manager suppresses ORWCV POLL as it fills up the screen. We'll reconsider that suppression in B2 once we handle this and other coversheet control RPCs properly.
  * list of routable RPCs in http://vamdemo.vistadataproject.info:9012/#management
