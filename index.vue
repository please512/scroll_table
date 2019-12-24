<div class="table-box" style="height: 100%;display: flex;flex-direction: column;justify-content:center;">
            <table class="table_head" style="height: 10%;">
                <thead>
                    <tr style="width:100%;display: flex;justify-content: center;">
                        <th align="center" width="12.5%" style="width:12.5%">时间</th>
                        <th align="center" width="12.5%" style="width:12.5%">名称</th>
                        <th align="center" width="12.5%" style="width:12.5%">类型</th>
                        <th align="center" width="12.5%" style="width:12.5%">单位</th>
                        <th align="center" width="12.5%" style="width:12.5%">位置</th>
                        <th align="center" width="12.5%" style="width:12.5%">类型</th>
                        <th align="center" width="12.5%" style="width:12.5%">程度</th>
                        <!-- <th align="center" width="12.5%" style="width:12.5%">处理</th> -->
                    </tr>
                </thead>
            </table>
            <div class="table_bod_div scroll_content" id="predictionId" style="height: 80%;">
                <table class="table_body" v-if="!loading">
                    <tbody>
                        <tr v-for="(item, index) in deviceList" :key="index" @click="setPoint(item)"
                            style="cursor: pointer;width:100%;display: flex;justify-content: center;">
                            <td class="device_name_color" align="center" width="12.5%">{{item.createTime}}</td>
                            <td align="center" width="12.5%">{{item.deviceName}}</td>
                            <td align="center" width="12.5%">{{item.deviceType}}</td>
                            <td align="center" width="12.5%">{{item.companyId}}</td>
                            <td align="center" width="12.5%">{{item.location}}</td>
                            <td align="center" width="12.5%">{{item.alarmDetails}}</td>
                            <td align="center" width="12.5%">{{item.alarmLevel}}</td>
                        </tr>
                    </tbody>
                </table>
                <div v-if="loading" style="height: 100%;display: flex;justify-content: center;align-items: center;">
                    <a-icon type="loading" style="color:#fff;font-size:80px;font-weight:900;"/>
                </div>
            </div>
        </div>
