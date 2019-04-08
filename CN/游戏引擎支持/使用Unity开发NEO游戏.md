# Unity 支持 (.NET)
## 1. 依赖
* .Net 4.6
* [Unity](https://unity.com/)
* [neo-lux unitypackage](https://github.com/CityOfZion/neo-lux/blob/master/Unity/Neo.Lux.0.7.5.unitypackage)
    \
    neo-lux 是一个 C#版本的NEO-SDK，可以在Unity中使用，帮助开发区块链游戏，实现游戏与NEO区块链的交互、以及调用智能合约的功能。

## 2. 在Unity集成neo-lux
**注意**: 
为了在Unity中调用neo-lux的方法，请使用[Coroutines](https://docs.unity3d.com/Manual/Coroutines.html)。

neo-lux提供了一个简单的 [Unity demo](https://github.com/CityOfZion/neo-lux/tree/master/Demos/NeoUnity)，展示如何加载NEO钱包，以及查询其在TestNet的NEO余额的过程。开发者可以通过这个demo,学习如何在Unity创建的游戏项目中集成neo-lux，然后探索更多neo-lux提供的与NEO区块链交互的功能。
1. 下载并安装 [Unity](https://store.unity.com/)
2. 从GitHub上下载 [neo-lux](https://github.com/CityOfZion/neo-lux) 
3. 用以下命令行clone项目或者直接从 [这里下载](https://github.com/CityOfZion/neo-lux/archive/master.zip)
    ```
    git clone https://github.com/CityOfZion/neo-lux.git
    ```
4. 在Unity中通过demo打开已有项目 (`./neo-lux-master/Demos/NeoUnity`)
    \
    \
     <img src="../../images/unity-1.png" alt="open project" height="250">

5. 将 [neo-lux unity package](https://github.com/CityOfZion/neo-lux/raw/master/Unity/Neo.Lux.0.7.5.unitypackage)(`./neo-lux-master/Unity`) 导入到该项目
    \
    \
     <img src="../../images/unity-import.png" alt="open project" height="300">
    \
    \
     <img src="../../images/unity-neolux.png" alt="open project" height="300">
6. 双击打开demo
    \
    \
     <img src="../../images/unity-demo.png" alt="open project" height="300">
7. 点击play，查看demo的结果

**注意**: 如果在调试窗口仍然报错，你需要点击上方工具条-> File -> Build Settings -> Player Settings -> Other Settings, 然后将API兼容水平设置为 `.NET 4.x `。
<img src="../../images/unity-setting.png" alt="open project">

所有NEO区块链交互的代码都在 NeoDemo.cs (`./neo-lux-master/Demos/NeoUnity/Assets/Scripts/NeoDemo.cs`)

现在你已经使用Unity创建了一个可以和NEO TestNet交互的简单demo，接下来你可以尝试编写其它代码来探索neo-lux提供的其他功能。

关于NEO-Lux的更多功能和使用方法, 请参考 [NEOLux Usage](https://github.com/CityOfZion/neo-lux#usage) 以及 [demos](https://github.com/CityOfZion/neo-lux/tree/master/Demos).

## 3. Sample
NEO的社区开发者还提供了一个教程，发布在Medium上，其演示了如何在Unity中集成neo-lux, 并开发一个简单的区块链游戏。

详细的文档，请参考[making a game with neo unity](https://medium.com/@tbriley/making-a-game-with-neo-unity-part-1-4099ec7d7a82)。
