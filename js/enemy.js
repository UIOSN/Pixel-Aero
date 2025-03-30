function spawnEnemies() {
    const brightColors = ['#00FFFF', '#FFD700', '#FFA500', '#ff0080', '#00BFFF',"#FF0000","#800080"]; //蓝色、黄色、橙色、粉色、深蓝色、红色、紫色
    // 生成随机颜色函数
    setInterval(() => {
      if (CONFIG.enemies.length < 2000) { // 限制敌人数量
        CONFIG.enemies.push({
          x: Math.random() * (CONFIG.canvas.width - 30),
          y: 0,
          width: 55,
          height: 45,
          speed: (2 + Math.random() * 3) * CONFIG.enemySpeedMultiplier, // 增加初始速度
          // 随机选择预定义颜色或动态生成颜色
          color: brightColors[Math.floor(Math.random() * brightColors.length)] // 从预定义颜色中选择
            
        });
      }
    }, CONFIG.enemySpawnInterval);
  }